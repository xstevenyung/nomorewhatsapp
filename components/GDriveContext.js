import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';

const DISCOVERY_DOCS = [
  'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest',
];

const SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';

const GDriveContext = createContext({
  auth: false,
  togglePicker: () => null,
});

function GDrivePicker({ accessToken, visible, onPick: handlePick }) {
  const picker = useMemo(
    () =>
      new google.picker.PickerBuilder()
        .addView(
          new google.picker.DocsView()
            .setIncludeFolders(true)
            .setSelectFolderEnabled(true),
        )
        .setOAuthToken(accessToken)
        .setCallback(({ action, docs }) => {
          if (action === 'picked') {
            handlePick(docs);
          }
        })
        .build(),
    [accessToken],
  );

  useEffect(() => () => picker.setVisible(false), []);

  useEffect(() => {
    if (picker) {
      picker.setVisible(visible);
    }
  }, [visible, picker]);

  return null;
}

function GDriveContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [pickerLoaded, setPickerLoaded] = useState(false);
  const [showPicker, togglePicker] = useReducer(() => !showPicker, false);
  const auth = useMemo(() => !!authUser, [authUser]);
  const accessToken = useMemo(
    () => (authUser ? authUser.getAuthResponse().access_token : null),
    [authUser],
  );

  // useEffect(() => {
  //   if (auth && showPicker && pickerLoaded) {
  //     const picker = new google.picker.PickerBuilder()
  //       .addView(google.picker.ViewId.FOLDERS)
  //       .setOAuthToken(accessToken)
  //       .build();
  //     picker.setVisible(true);
  //   }
  // }, [showPicker, auth, accessToken, pickerLoaded]);

  function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
      setAuthUser(gapi.auth2.getAuthInstance().currentUser.get());
    } else {
      gapi.auth2.getAuthInstance().signIn();
    }
  }

  // function listFiles() {
  //   gapi.client.drive.files
  //     .list({
  //       pageSize: 10,
  //       fields: 'nextPageToken, files(id, name)',
  //     })
  //     .then(function (response) {
  //       console.log(response);
  //       // appendPre('Files:');
  //       // var files = response.result.files;
  //       // if (files && files.length > 0) {
  //       //   for (var i = 0; i < files.length; i++) {
  //       //     var file = files[i];
  //       //     appendPre(file.name + ' (' + file.id + ')');
  //       //   }
  //       // } else {
  //       //   appendPre('No files found.');
  //       // }
  //     });
  // }

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
      gapi.load('picker', () => {
        // pickerApiLoaded = true;
        setPickerLoaded(true);
        // createPicker();
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <GDriveContext.Provider value={{ auth, togglePicker }}>
      {auth && (
        <GDrivePicker
          accessToken={accessToken}
          visible={showPicker}
          onPick={console.log}
        />
      )}

      {children}
    </GDriveContext.Provider>
  );
}

function useGDrive() {
  return useContext(GDriveContext);
}

export default GDriveContext;
export { GDriveContextProvider, useGDrive };
