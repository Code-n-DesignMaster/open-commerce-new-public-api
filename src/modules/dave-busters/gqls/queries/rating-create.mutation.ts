export const RATING_CREATE_MUTATION = `
     mutation ratingCreate($transactionUuid: ID!, $numberOfStars: Float!) {
       ratingCreate(transactionUuid: $transactionUuid, numberOfStars: $numberOfStars)
}`;
