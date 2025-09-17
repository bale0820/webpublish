export function Jobs() {
    const jobs = [
        {
            "img": "/images/jobs/google.png",
            "alt": "google",
            "title": "Google as Junior Software Engineer",
            "description": "2019 Oct - Until now"

        },
        {
            "img": "/images/jobs/samsung.png",
            "alt": "samsung",
            "title": "Samsung as Junior Software Engineer",
            "description": "2010 Oct - 2019 Oct"

        }
    ];


    return (
        <ul className="jobs">
            {jobs && jobs.map((job) =>
                <li className="job">
                   <Job img={job.img} alt={job.alt} title={job.title} description={job.description} />
                </li>

            )}
        </ul>
    );
}
export function Job({ img, alt, title, description }) {

    return (
        <>
            <img src={img} alt={alt} />
            <div>
                <p className="job-name">{title}</p>
                <p className="job-period">{description}</p>
            </div>
        </>
    );
}



{/* <ul className="jobs">
    <li className="job">
        <img src="images/jobs/google.png" alt="google" />
        <div>
            <p className="job-name">Google as Junior Software Engineer</p>
            <p className="job-period">2019 Oct - Until now</p>
        </div>
    </li>
    <li className="job">
        <img src="images/jobs/samsung.png" alt="samsung" />
        <div>
            <p className="job-name">Samsung as Junior Software Engineer</p>
            <p className="job-period">2010 Oct - 2019 Oct</p>
        </div>
    </li>
</ul> */}