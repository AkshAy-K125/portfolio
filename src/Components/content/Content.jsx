import './content.css';
import parse from 'html-react-parser';

function Content({ company }) {
  const handleCompanyLogoClick = () => {
    window.open(company.home_page_link)
  }


  return (
    <div className='content_experience-block'>
      <div className='company-logo_holder zoom' onClick={handleCompanyLogoClick}>
        <img loading="lazy" src={require("../../assets/companies/" + (company.name) + ".png")} alt="companyLogo" />
      </div>
      <div className='company_details'>
        <div className='company_header'>{company.header}</div>
        <br />
        <div className='company_timeframe'>{company.positioon_and_timeFrame}</div>
        <br />
        <div className='company_place_of_work'>{company.placeOfWork}</div>
        <br />
        <div className='company_content'>{parse(company.content)}</div>
      </div>
    </div>
  )
}

export default Content