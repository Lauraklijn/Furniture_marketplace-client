import { apiUrl } from "../../configuratie/constants";
import axios from "axios";

export const NEW_EMAIL = "NEW_EMAIL";

function newEmail(payload) {
  return {
    type: NEW_EMAIL,
    payload
  };
}

export const createEmail = (emailData, ownerEmail) => {
  return async (dispatch, getState) => {
    console.log("*****", emailData, ownerEmail);
    console.log("email getState", getState().user);
    const token = getState().user.token;
    const response = await axios.post(
      `${apiUrl}/sendMail`,
      {
        emailData,
        ownerEmail
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    dispatch(newEmail(response.body));
    console.log("dispatch?", dispatch());
  };
};

//export const createEmail = (emailData, ownerEmail) => (dispatch, getState) => {
//   console.log("*****", emailData, ownerEmail);
//   console.log("email getState", getState().user);
//   const token = getState().user.token;
//   const data = { ...emailData, ownerEmail };

//   request
//     .post(`${apiUrl}/sendMail`)
//     .set("Authorization", `Bearer ${token}`)
//     .send(data)
//     .then(response => {
//       const action = newEmail(response.body);
//       dispatch(action);
//     })
//     .catch(console.error);
// };

// import axios from "axios";
// import { apiUrl } from "../../configuratie/constants";

// export const NEW_EMAIL = "NEW_EMAIL";

// function newEmail(payload) {
//   return {
//     type: NEW_EMAIL,
//     payload
//   };
// }

// export const createEmail = (emailData, ownerEmail) => (dispatch, getState) => {
//   console.log("*****", emailData, ownerEmail);
//   console.log("email getState", getState().user);
//   return async (dispatch, getState) => {
//     const token = getState().user.token;
//     const data = { ...emailData, ownerEmail };
//     const response = await axios.post(`${apiUrl}/sendMail`);

//     dispatch(newEmail(response.data));
//   };
// };

//   request
//     .post(`/sendMail`)
//     .set("Authorization", `Bearer ${token}`)
//     .send(data)
//     .then(response => {
//       const action = newEmail(response.body);
//       dispatch(action);
//     })
//     .catch(console.error);
// }};

// const response = await axios.get(`${apiUrl}/me`, {
//     headers: { Authorization: `Bearer ${token}` }
//   });

// export const fetchProductById = id => {
//   return async (dispatch, getState) => {
//     const response = await axios.get(
//       `${apiUrl}/homepages/${id}/products/${id}`
//     );
//     console.log("Productdetails fetched", response.data);
//     dispatch(productDetailsFetched(response.data));
//   };
// };
