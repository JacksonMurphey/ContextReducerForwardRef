import styled from "styled-components";

const Crd = styled.div`
    margin-top: 100px;
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 10px;
`

const Card = (props) => {

    return (
        <Crd className={`${props.className}`}>{props.children}</Crd>
    )
}
export default Card