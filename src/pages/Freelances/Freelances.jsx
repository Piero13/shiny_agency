import styled from 'styled-components'
import Card from '../../components/Card/Card'
import colors from '../../utils/style/colors'

const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
    },
]

const CardContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
`

const PageTitle = styled.h1`
    font-size: 30px;
    color: black;
    text-align: center;
    padding-bottom: 30px;
`

const PageSubtitle = styled.h2 `
    font-size: 20px;
    color: ${colors.primary};
    font-weight: 300;
    text-align: center;
    padding-bottom: 30px;
`

function Freelances() {
    return (
        <div>
            <PageTitle>Trouvez vos prestataires</PageTitle>
            <PageSubtitle>
                Chez Shiny nous réunissons les meilleurs profils pour vous.
            </PageSubtitle>
            <CardContainer>
                {freelanceProfiles.map((profile, index) => (
                    <Card
                        key={`${profile.name}-${index}`}
                        label={profile.jobTitle}
                        title={profile.name}
                    />
                ))}
            </CardContainer>
        </div>
    )
}

export default Freelances