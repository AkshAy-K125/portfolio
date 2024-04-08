import './projects.css'

const Projects = ({ project }) => {
    return (
        <>
            <div className='projMainContainer'>
                <div className='mainDetails'>
                    <div><h4>{project.tittle}</h4></div>
                    <div className='stackImages'>
                        {
                            project.stacks.map((ele, index) => {
                                return <img alt="stacks" key={index} src={ele} />
                            })
                        }
                    </div>
                    <div>
                        <p>
                            {project.shortDescription}
                        </p>
                    </div>
                    <div className='videoSourceContainer'>
                        {project.vedio &&
                            <div className='zoom'>
                                <a href={project.vedio} rel="noreferrer" target="_blank">
                                    <img alt="YT" src="https://img.shields.io/badge/YouTube-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white" />
                                </a>
                            </div>
                        }
                        <div className='zoom'>
                            <a href={project.sourceCode} rel="noreferrer" target="_blank">
                                <img alt="code" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='tumbnailDiv zoom'>
                    {
                        project.thumbnailLink &&
                        <a href={project.thumbnailLink} rel="noreferrer" target="_blank">
                            {
                                project.thumbnail === "" ?
                                    <img alt="preview" src={"https://www.koreandrama.org/wp-content/uploads/wmO7Nf-5.jpg"} />
                                    :
                                    <img alt="preview" src={require("../../assets/projects/" + (project.thumbnail) + ".png")} />

                            }
                        </a>
                    }
                </div>
            </div >
        </>
    )
}

export default Projects


