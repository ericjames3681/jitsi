import React from "react";

// const domain = "meet.jit.si";
// const options = {
//   roomName: "JitsiMeetAPIExample",
//   // width: 700,
//   // height: 700,
//   // parentNode: document.querySelector("#meet"),
//   // devices: {
//   //   audioInput: "<deviceLabel>",
//   //   audioOutput: "<deviceLabel>",
//   //   videoInput: "<deviceLabel>",
//   // },
//   // configOverwrite: { startWithAudioMuted: true },
//   // interfaceConfigOverwrite: { filmStripOnly: true },
//   // userInfo: {
//   //   email: "email@jitsiexamplemail.com",
//   //   displayName: "John Doe",
//   // },
// };
// const api = new window.JitsiMeetExternalAPI(domain, options);

const VideoConference = () => {
  const jitsiContainerId = "jitsi-container-id";
  const [jitsi, setJitsi] = React.useState({});

  const loadJitsiScript = () => {
    let resolveLoadJitsiScriptPromise = null;

    const loadJitsiScriptPromise = new Promise((resolve) => {
      resolveLoadJitsiScriptPromise = resolve;
    });

    const script = document.createElement("script");
    script.src = "https://meet.jit.si/external_api.js";
    script.async = true;
    script.onload = () => resolveLoadJitsiScriptPromise(true);
    document.body.appendChild(script);

    return loadJitsiScriptPromise;
  };

  const initialiseJitsi = async () => {
    if (!window.JitsiMeetExternalAPI) {
      await loadJitsiScript();
    }

    const _jitsi = new window.JitsiMeetExternalAPI("meet.jit.si", {
      parentNode: document.getElementById(jitsiContainerId),
    });

    setJitsi(_jitsi);
  };

  React.useEffect(() => {
    initialiseJitsi();

    return () => jitsi?.dispose?.();
  }, []);

  return <div id={jitsiContainerId} style={{ height: 720, width: "100%" }} />;
};

export default VideoConference;
