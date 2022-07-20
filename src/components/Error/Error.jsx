import styled from "styled-components"
import colors from "../../utils/style/colors"
import Monkey from "../../assets/monkey_see_no_evil.png"

const ErrorWrapper = styled.div`
    margin: 30px;
    display: flex;
    flex-direction: column;
    background-color: ${colors.backgroundLight};
    align-items: center;
`

const ErrorTitle = styled.h1`
    font-weight: 300;
`

const ErrorSubtitle = styled.h2`
    font-weight: 300;
    color: ${colors.secondary}
`

const Illustration = styled.img`
    max-width: 400px;
`

function Error() {
    return (
        <ErrorWrapper>
            <ErrorTitle>Oups...</ErrorTitle>
            <Illustration src={Monkey}/>
            <ErrorSubtitle>
                Il semblerait que la page que vous cherchez n'existe pas...
            </ErrorSubtitle>
        </ErrorWrapper>
    )
}

export default Error