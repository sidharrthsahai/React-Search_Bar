export const constructResults = (response) => {
  if (response && response.data && response.included) {
    return response.data.map((managers) => {
      let account = response.included.find(
        (e) =>
          e.type === "accounts" &&
          managers.relationships.account.data.id === e.id
      );
      let wrapper = {
        displayName: managers.attributes.name,
        initialFN:
          managers.attributes && managers.attributes.firstName
            ? managers.attributes.firstName.charAt(0)
            : null,
        initialLN:
          managers.attributes && managers.attributes.lastName
            ? managers.attributes.lastName.charAt(0)
            : null,
        searchKey: managers.attributes.firstName + managers.attributes.lastName,
        email: account.attributes ? account.attributes.email : null,
        initials: "??",
      };

      let initials = (
        (wrapper.initialFN ? wrapper.initialFN : " ") +
        (wrapper.initialLN ? wrapper.initialLN : " ")
      ).trim();
      wrapper.initials = initials ? initials : wrapper.initials;
      delete wrapper["initialFN"];
      delete wrapper["initialLN"];
      wrapper.searchKey = wrapper.searchKey
        ? wrapper.searchKey.toLowerCase()
        : null;
      return wrapper;
    });
  } else {
    return [];
  }
};
