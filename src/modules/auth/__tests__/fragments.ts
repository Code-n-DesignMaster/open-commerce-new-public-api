export const addressFragment = `fragment AddressFragment on Address {
  alias
  street1
  street2
  city
  state
  zipCode
}`;

export const personNameFragment = `fragment PersonNameFragment on PersonName {
  title
  first
  middle
  last
  suffix
}`;

export const paymentInstrumentFragment = `fragment PaymentInstrumentFragment on PaymentInstrument {
  uuid
  alias
  providerNickName
  accountNumber
  status
  displayNumber
  isDefault
  address {...AddressFragment}
}`;

export const customerFragment = `
  ${personNameFragment}
  fragment CustomerFragment on Customer {
  username
  name {
    ...PersonNameFragment
  }
  paymentWallet {
    ...PaymentInstrumentFragment
  }
}`;
