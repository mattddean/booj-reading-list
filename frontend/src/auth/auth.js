import { onLogin, onLogout } from "../vue-apollo";
import { GC_USER_ID, FULL_NAME } from "../constants/settings";

export async function doLogin(
  apolloClient,
  vueRootReference,
  accessToken,
  userId,
  userFullName
) {
  onLogin(apolloClient, accessToken);

  localStorage.setItem(GC_USER_ID, userId);
  localStorage.setItem(FULL_NAME, userFullName);
  // auth token storage is handled by onLogin

  vueRootReference.$data.userId = userId;
  vueRootReference.$data.fullName = userFullName;
}

export async function doLogout(apolloClient, vueRootReference) {
  onLogout(apolloClient);

  localStorage.removeItem(GC_USER_ID);
  localStorage.removeItem(FULL_NAME);
  // auth token storage is handled by onLogout

  vueRootReference.$data.userId = null;
  vueRootReference.$data.fullName = null;
}
