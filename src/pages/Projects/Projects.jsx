"use client";

import React, { Fragment, lazy, Suspense } from 'react'
import TopSection from '../../components/TopSection/TopSection'
import projectsPageImage from '../../assets/images/projectsPage.png'
import './Projects.css'
import Project from '../../components/Project/Project'
import { 
    projectsData, 
    projectImages1, 
    projectImages2, 
    projectImages3, 
    otherImages 
} from './projectsData'
import women2 from '../../assets/images/women2.png'
import { Grid } from '@mui/material'
import Skeleton from '@mui/material/Skeleton';
import Image from 'next/image';
// import { useRouter } from 'next/router';
// import { useParams } from 'next/navigation'

// const Video = lazy(() => import('../../components/Video/Video'));

const Loader = () => (
    <Skeleton
        sx={{ 
            bgcolor: 'grey.900',
            width: '100%',
            height: '350px'
        }}
        variant="rectangular"
    />
)



function ProjectsPage() {
    const page = 1
    // const { page } = useParams()
    // const router = useRouter()

    const handleNav = (page) => {
        // router.push(`/projects/${page}`)
    }

    return (
        <Fragment>
            <TopSection
                title="PROJECTS"
                text="The media and gender enlightenment initiative (MEGEIN) emerged in 2008  as a non-profit organization to serve as a leading organ for media and gender-sensitivty in Nigeria and beyond."
                image={projectsPageImage}
                projectPage
            />

            { page === '1' && (
                <>
                    <h2 className="projects__title">Request for Info: Media Reportage of Land Rights & Agricultural Development</h2>
            
                    <p className="projects__text">Sequel to our correspondence with Sarah Macharia on March 15th 2019, the project 2912 was scheduled to commence in April 2019, but did not take off as earlier communicated. This was against the backdrop of the Gent chart for 2019 WACC project sent to us by Gesele Langendries, which indicated that field work in the area of Land Rights and Agricultural Development should be conducted in line with the code sheet and coding instruction of the GMMP methodology. As a result, field work was due to take off in June, while analysis will be in July - August.</p>
                    <p className="projects__text">This Gent chart was exactly followed by MEGEIN. In June, we conducted the field work on Land Rights and Agricultural Development: Implications for Gender Perspective. The analysis of data ran through July to September, 2019. After thorough review of the results, the report was sent to Sarah Macharia on October, 2019. The fallout of the findings guided the development of the training manual and papers for presentation during the workshop sessions. </p>
                    <p className="projects__text">The workshop officially took off on 19th of November 2019 in Owerri at Delegend Hotel Opposite State House of Assembly, IMO State. The Owerri workshops ran for two days (19 & 20th November, 2019). We are sure to finish Southern zone and begin with Northern zone before the end of December. The impact of the workshops are very impressive as the journalists gave their reactions and views during the interactive sessions. These views are currently being crystallised into a wholesome report. </p>

                    <div className="projects__images-container">
                        { projectImages1.map((image, i) => (
                            <Image key={i} className="projects__image" src={image} alt="" />
                        ))}
                    </div>
                </>
            )}

            { page === '2' && (
                <>
                    <h2 className="projects__title">GMMP Training Workshop in Kenya</h2>
                    <div className="projects__images-container">
                        { projectImages2.map((image, i) => (
                            <Image key={i} className="projects__image" src={image} alt="" />
                        ))}
                    </div>
                </>
            )}

            { page === '3' && (
                <>
                    <h2 className="projects__title">Violence against Women (VAW)</h2>
                    <div className="projects__images-container">
                        { projectImages3.map((image, i) => (
                            <Image key={i} className="projects__image" src={image} alt="" />
                        ))}
                    </div>
                </>
            )}

            { page === '4' && (
                <Grid container className="projects">
                    <Grid item xs={1} md={3} />
                    <Grid item xs={10} md={6}>
                        <Project title={projectsData[0].title} date={projectsData[0].date} text={projectsData[0].text} image={women2} />
                        <Project title={projectsData[1].title} date={projectsData[1].date} text={projectsData[1].text} image={women2} />
                        <Project title={projectsData[2].title} date={projectsData[2].date} text={projectsData[2].text} image={women2} />
                        <Project title={projectsData[3].title} date={projectsData[3].date} text={projectsData[3].text} image={women2} />
                        <Project link={projectsData[4].link} date={projectsData[4].date} linkText={projectsData[4].linkText} image={women2} />
                        <Project link={projectsData[5].link} date={projectsData[5].date} linkText={projectsData[5].linkText} image={women2} />
                    </Grid>
                    <Grid item xs={1} md={3} />
                </Grid>
            )}

            { page === '5' && (
                <>
                    <h2 className="projects__title">
                        GENDER IMPLICATIONS OF NEWS OUTPUT: REINFORCING THE KNOWLEDGE BASE OF MEDIA PRACTITIONERS
                    </h2>

                    <h3 className="projects__subtitle">
                        PRODUCED BY
                    </h3>

                    <h3 className="projects__subtitle">
                        MEDIA AND GENDER ENLIGHTENMENT INITIATIVE (MEGEIN)
                    </h3>

                    <h3 className="projects__subtitle">
                        (Watching the watchdog)
                    </h3>

                    <h3 className="projects__subtitle">
                        In Collaboration With
                    </h3>

                    <h3 className="projects__subtitle">
                        WORLD ASSOCIATION FOR CHRISTIAN COMMUNICATION (WACC) 
                    </h3>

                    <h3 className="projects__subtitle">
                        © media and gender enlightenment initiative, 2018
                    </h3>

            
                    <p className="projects__text">Incontrovertibly, the slow rate of African nations at covering the yawning gap of inequality between men and women representations in the news media has become worrisome. This is as it affects the need to overcome the daunting challenges of mainstreaming gender for the sustenance of national development programmes prevailing in African nations, of which Nigeria is part.</p>
                    <p className="projects__text">
                        Reinforcing this view, the global report of GMMP 2020 (www.gmmp2020) states that “full gender equality on numerical counts, however, is insufficient without improvement in the quality of journalism from a gender perspective”. It was this idea that informed the collaborative initiative between MEGEIN and WACC that resulted in the training of editors and senior reporters in Nigeria in gender perspective reporting in 2008. Unfortunately, media monitoring in subsequent years have not shown significant improvement. 
                    </p>
                    <p className="projects__text">
                        Findings of Global Media Monitoring Project (GMMP) carried out over the years have persistently revealed the poor presence of women, including the silencing of their voices in mainstream and social media. Recalling the shocking revelations of Nigeria’s national report of GMMP 2005, Fab-Ukozor and Nwodu state that “…overall result here showed that a total of 42 females were news subjects as against 206 males used as news subjects”. (GMMP Report, 2005: p.15). The implication of the above statistics show that the views of men were more highlighted in the news since they were widely dominant as news subjects than women.
                    </p>
                    <p className="projects__text">
                        Subsequent GMMP reports also replicated similar findings. It is disheartening to note that 2010 and 2015 results of GMMP showed 24% of women as news subjects and 76% of men as news subjects. This revealed that there was no significant improvement in the visibility of women. Inasmuch as the result disclosed a slight increase, judging from previous report of 2005, the fact that stagnation was recorded did not augur well for the pursuit of gender equality and balance. 
                    </p>
                    <p className="projects__text">
                        Between 2015 and 2020, the needle edged one point forward to 25% in the representation of women as subjects and sources which was equally discouraging. The single point improvement is the first since 2010 and is most visible in broadcast media (www.gmmp2020). 
                    </p>
                    <p className="projects__text">
                        However, it is important to note that overall findings of GMMP 2020 showed interesting result regarding women’s presence in the news in North America and the Pacific. The report reveal that …women’s presence in the regions… has surpassed the critical 30% threshold in both digital and legacy media, unlike the result in Africa which fell below the global averages across all media types monitored. Similar results were observed in Asia and the Middle East in print and broadcast news (www.gmmp2020).
                    </p>
                    <p className="projects__text">
                        Import of the aforementioned results indicate that journalists in Africa, Asia and Middle East need to have diversified and in-depth knowledge of gender mainstream in order to assist the achievement of sustainable development goals in the regions. Hence, this workshop is targeted at reinforcing the knowledge base of media practitioners in Southeast, Nigeria regarding the gender implications of news output. It is therefore, the expectation of MEGEIN that after this exercise, news stories in Nigeria will begin to represent and portray women in the same degree that they participate in reality to engender the system.
                    </p>
                    <p className="projects__text">
                        We are grateful to WACC for sponsoring this workshop and remain thankful to Imo State University, Owerri for providing us with accommodation to offer our services in the Department of Mass communication, Faculty of Social Sciences.
                    </p>

                    <h3 className="projects__subtitle">
                        Dr. Alexander Chima Onyebuchi
                    </h3>
                    <h3 className="projects__subtitle">
                        Project Manager
                    </h3>
                    
                </>
            )}

            { page === '6' && (
                <Grid container className="projects">
                    <Grid item xs={1} md={3} />
                    <Grid item xs={10} md={6}>
                        {/* <Suspense fallback={<Loader />}>
                            <Video />
                        </Suspense> */}
                        
                    </Grid>
                    <Grid item xs={1} md={3} />
                </Grid>
            )}

            { page === '7' && (
                <>
                    <h2 className="projects__title">Other Images</h2>
                    <div className="projects__images-container">
                        { otherImages.map((image, i) => (
                            <Image 
                                key={i} 
                                className="projects__image" 
                                src={image} 
                                alt="" 
                                loading="lazy"
                            />
                        ))}
                    </div>
                </>
            )}

            <div className="projects__nav-button-container">
                { Array(7).fill().map((item, i) => (
                    <button 
                        key={i}
                        className={`projects__nav ${page === String(i + 1) && 'projects__nav-active' }`} 
                        onClick={() => handleNav(i + 1)}>{ i + 1 }
                    </button>
                ))}
            </div>
        </Fragment>
    )
}

export default ProjectsPage
