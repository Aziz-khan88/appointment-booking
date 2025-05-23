
export default function CaseStudiesPage() {
    const caseStudies = [
        { title: "Case Study 1", slug: "slug01" },
        { title: "Case Study 2", slug: "slug02" },
    ];

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Case Studies</h1>
            <ul className="space-y-2">
                {caseStudies.map((study) => (
                    <li key={study.slug}>
                        <a href={`/case-studies/${study.slug}`} className="text-blue-600 underline">
                            {study.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
