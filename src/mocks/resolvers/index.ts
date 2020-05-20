import * as casual from 'casual';

export const Mutation = () => ({
  // your mutations
  acceptTermsAndConditions: () => {
    return casual.boolean;
  },
});

export const OCPhoneNumber = () => {
  return `+1${casual.phone.replace(/-/g, '')}`;
};

export const OCJSON = () => {
  return '{ foo: "bar" }';
};

export const OCDate = () => {
  return casual.date('YYYY-MM-DD');
};

export const OCDateTime = () => {
  return casual.date('YYYY-MM-DD') + 'T' + casual.time('HH:mm:ss') + 'Z';
};

export const OCURL = () => {
  return casual.url;
};

export const OCEmailAddress = () => {
  return casual.email;
};

export const OCTime = () => {
  return casual.date('HH:mm') + 'Z';
};
