import { exampleActions } from "../reducers/auth";
import { AsyncAction } from "./common";

export type exampleActions = ReturnType<typeof exampleActions.setProducts>;

  export const signUp = (data: {email: string, password: string}): AsyncAction =>
    async (dispatch, _, { mainApi }) => {
      try {
        const response = await mainApi.signUp(data);
        console.log(response);
        // dispatch(exampleActions.setProducts());
      } catch (e) {
        console.log(e);
      }
    };
