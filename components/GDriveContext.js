import { createContext, useContext, useEffect, useState } from 'react';

const DISCOVERY_DOCS = [
  'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest',
];

const SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';

const GDriveContext = createContext({ auth: false });

function GDriveContextProvider({ children }) {
  const [auth, setAuth] = useState(false);

  function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
      setAuth(true);
    } else {
      gapi.auth2.getAuthInstance().signIn();
    }
  }

  function listFiles() {
    gapi.client.drive.files
      .list({
        pageSize: 10,
        fields: 'nextPageToken, files(id, name)',
      })
      .then(function (response) {
        console.log(response);
        // appendPre('Files:');
        // var files = response.result.files;
        // if (files && files.length > 0) {
        //   for (var i = 0; i < files.length; i++) {
        //     var file = files[i];
        //     appendPre(file.name + ' (' + file.id + ')');
        //   }
        // } else {
        //   appendPre('No files found.');
        // }
      });
  }

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://apis.google.com/js/api.js`;
    script.defer = true;
    script.async = true;
    script.onload = () => {
      gapi.load('client:auth2', () => {
        gapi.client
          .init({
            apiKey: process.env.NEXT_PUBLIC_API_KEY,
            clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES,
          })
          .then(
            function () {
              // Listen for sign-in state changes.
              gapi.auth2
                .getAuthInstance()
                .isSignedIn.listen(updateSigninStatus);

              // Handle the initial sign-in state.
              updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
              //   authorizeButton.onclick = handleAuthClick;
              //   signoutButton.onclick = handleSignoutClick;
            },
            function (error) {
              console.log(error);
              //   appendPre(JSON.stringify(error, null, 2));
            },
          );
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <GDriveContext.Provider value={{ auth }}>{children}</GDriveContext.Provider>
  );
}

function useAuth() {
  return useContext(GDriveContext);
}

export default GDriveContext;
export { GDriveContextProvider, useAuth };
