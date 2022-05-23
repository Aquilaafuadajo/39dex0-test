export const configs = {
  title: "Patient Bio-Data.",
  subtitle:
    "Please fill in patients bio-data, this is important to setup a newpatient record",
  fields: [
    [
      {
        label: "First Name",
        name: "firstName",
        placeholder: "Patients first name",
        value: "",
        type: "text",
      },
      {
        label: "Last Name",
        name: "lastName",
        placeholder: "Patients last name",
        value: "",
        type: "text",
      },
    ],
    [
      {
        label: "Date of Birth",
        name: "dateOfBirth",
        placeholder: "MM DD YYYY",
        value: "",
        type: "text",
      },
      {
        label: "Gender",
        name: "gender",
        placeholder: "Choose Option",
        value: "",
        type: "text",
      },
    ],
    [
      {
        label: "Marital Status",
        name: "maritalStatus",
        placeholder: "Choose Option",
        value: "",
        type: "text",
      },
      {
        label: "Nationality",
        name: "nationality",
        placeholder: "Choose Option",
        value: "",
        type: "text",
      },
    ],
    [
      {
        label: "Language Spoken",
        name: "languageSpoken",
        placeholder: "Choose Option",
        value: "",
        type: "text",
      },
    ],
  ],
};
