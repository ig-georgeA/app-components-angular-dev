(window as any).$ = {
  ig: {
    RevealSdkSettings: {
      setBaseUrl: () => { /* Mock implementation */ },
      theme: {}
    },
    RVDashboard: {
      loadDashboard: () => { /* Mock implementation */ },
    },
    RevealTheme: function () {
      return {};
    },
    RevealView: function () {
      return {};
    }
  }
};
