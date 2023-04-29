import styled from 'styled-components';

export const ListContainer = styled.ul.attrs({
  className: 'max-h-screen overflow-y-scroll divide-y divide-gray-100'
})`
  margin: 0px;
  padding: 10px 20px 10px 20px;
`;

export const ListContent = styled.li.attrs({
  className: 'flex justify-between gap-x-6 py-5'
})``;
