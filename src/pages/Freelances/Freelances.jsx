import styled from 'styled-components'
import Card from '../../components/Card/Card'
import colors from '../../utils/style/colors'
import { useState, useEffect } from 'react'
import { Loader } from '../../utils/style/Atoms'

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

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

function Freelances() {
    const [isDataLoading, setDataLoading] = useState(false)
    const [error, setError] = useState(false)
    const [freelancersList, setFreelancesList] = useState([])
  
    useEffect(() => {
      async function fetchFreelances() {
        setDataLoading(true)
        try {
          const response = await fetch(`http://localhost:8000/freelances`)
          const { freelancersList } = await response.json()
          setFreelancesList(freelancersList)
        } catch (err) {
          console.log('### error ###', err)
          setError(true)
        } finally {
          setDataLoading(false)
        }
      }
      fetchFreelances()
    }, [])
  
    if (error) {
      return <span>Oups il y a eu un problème</span>
    }

    return (
        <div>
            <PageTitle>Trouvez vos prestataires</PageTitle>
            <PageSubtitle>
                Chez Shiny nous réunissons les meilleurs profils pour vous.
            </PageSubtitle>
            {isDataLoading ? (
                <LoaderWrapper>
                    <Loader/>
                </LoaderWrapper>
                
            ) : (
                <CardContainer>
                    {freelancersList.map((profile, index) => (
                        <Card
                            key={`${profile.name}-${index}`}
                            label={profile.job}
                            title={profile.name}
                            picture={profile.picture}
                        />
                    ))}
                </CardContainer>
            )}
        </div>
    )
}

export default Freelances