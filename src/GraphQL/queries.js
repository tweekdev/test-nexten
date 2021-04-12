import { gql } from '@apollo/client';

//recupere toute la liste des pays
export const LIST_COUNTRIES = gql`
  {
    countries {
      name
      code
      native
      capital
      emoji
    }
  }
`;

// recupere le pays en fonction du code
export const COUNTRY = gql`
  query($code: ID!) {
    country(code: $code) {
      name
      code
      native
      capital
      emoji
      currency
      languages {
        code
        name
      }
    }
  }
`;

export const LIST_LANGUAGES = gql`
  {
    countries {
      languages {
        code
        name
      }
    }
  }
`;
