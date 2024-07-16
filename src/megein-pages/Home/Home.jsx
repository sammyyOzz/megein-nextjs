import React, { Fragment } from 'react'
import HomeTopSection from './HomeTopSection'
import ProjectsSection from './ProjectsSection'
// import WhatWeDo from '../../components/WhatWeDo/WhatWeDo'

function Home() {

    return (
        <Fragment>
            <HomeTopSection />
            {/* <WhatWeDo /> */}
            <ProjectsSection />
        </Fragment>
    )
}

export default Home
