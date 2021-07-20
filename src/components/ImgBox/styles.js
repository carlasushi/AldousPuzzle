import styled from 'styled-components'

export const Image = styled.div `
    background-image: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/412f46f0-5274-4d1c-8d46-27e6d8ab2aca/db76bfi-447c053e-2135-4256-bbe6-b07a98cdf607.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQxMmY0NmYwLTUyNzQtNGQxYy04ZDQ2LTI3ZTZkOGFiMmFjYVwvZGI3NmJmaS00NDdjMDUzZS0yMTM1LTQyNTYtYmJlNi1iMDdhOThjZGY2MDcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.n6oPMbPvkf3oeLxlh-9M1xh1BiJodIBlzlIyAvkplts');
    background-size: 450px 600px;
    height: 6.25em;
    width: 6.25em;
    border-radius: 1.8em;
    position: relative;
    background-position: ${({$initialX,$initialY}) => 
    `-${$initialX * 100}px -${$initialY*100}px`};
    `

