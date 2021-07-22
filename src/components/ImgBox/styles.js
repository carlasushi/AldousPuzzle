import styled from 'styled-components'
// instyle w/o generating a new classname by using attr in style 
export const Image = styled.div.attrs(({$movedX, $movedY}) => ({
    style: {
        transform: `translate(${$movedX}px, ${$movedY}px)`,
    },
}))`
    background-image: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/412f46f0-5274-4d1c-8d46-27e6d8ab2aca/db76bfi-447c053e-2135-4256-bbe6-b07a98cdf607.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQxMmY0NmYwLTUyNzQtNGQxYy04ZDQ2LTI3ZTZkOGFiMmFjYVwvZGI3NmJmaS00NDdjMDUzZS0yMTM1LTQyNTYtYmJlNi1iMDdhOThjZGY2MDcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.n6oPMbPvkf3oeLxlh-9M1xh1BiJodIBlzlIyAvkplts');
    background-size: 450px 600px; // based on img size
    //rendering inside the grid, breaking up img equally
    background-position: ${({$initialX,$initialY}) => `
    -${$initialX * 100}px -${$initialY * 100}px`};
    // puzzle pieces set size
    height: 6.25em;
    width: 6.25em;
    // border-radius: 30px;
    position: relative;
    `

