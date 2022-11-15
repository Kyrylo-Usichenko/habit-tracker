import HttpClient from "./http-client";

class Main extends HttpClient {
  private static instanceCached: Main;

  private constructor() {
    super(import.meta.env.VITE_APP_TITLE);
  }

  static getInstance = () => {
    if (!Main.instanceCached) {
      Main.instanceCached = new Main();
    }

    return Main.instanceCached;
  };

  public signUp = (data: { email: string; password: string }) =>
    this.instance.post("/signup", data);
}

export default Main;
