import { useState, useEffect } from "react";

const ProjectSelector = ({ setProjectId }) => {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/api/projects")
            .then(res => res.json())
            .then(data => setProjects(data))
            .catch(err => console.error("Error fetching projects:", err));
    }, []);

    const handleChange = (event) => {
        setSelectedProject(event.target.value);
        setProjectId(event.target.value); // Pass the selected project ID to parent
    };

    return (
        <div>
            <label>Select a Project:</label>
            <select value={selectedProject} onChange={handleChange}>
                <option value="">-- Select Project --</option>
                {projects.map(project => (
                    <option key={project._id} value={project._id}>
                        {project.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ProjectSelector;
