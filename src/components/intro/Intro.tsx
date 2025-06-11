import React from 'react';
import { Wrapper } from '../common/Containers';

const Intro: React.FC = () => {
    return (
        <Wrapper>
            <h4>Custom Generic Components</h4>
            <p>
                Custom generic components are reusable, specific building blocks designed to streamline development and ensure consistency across applications. These components are typically created to align with a design system, coding standards, and business requirements. By encapsulating common functionality and styling, they provide a standardized way to implement features, reducing the need for repetitive code and minimizing errors.
            </p>
            <p>
                The benefits of using custom generic components include:
            </p>
            <ul>
                <li><strong>Consistency</strong>: Ensures a uniform look and feel across all applications, improving the user experience.</li>
                <li><strong>Efficiency</strong>: Speeds up development by providing pre-built, tested components that developers can easily integrate.</li>
                <li><strong>Maintainability</strong>: Centralizes updates and bug fixes, as changes to a component propagate to all instances where it's used.</li>
                <li><strong>Scalability</strong>: Simplifies scaling applications by reusing components in new features or projects.</li>
                <li><strong>Collaboration</strong>: Encourages collaboration among teams by providing a shared library of components.</li>
            </ul>
            <p>
                These components are often stored in a dedicated library or repository, making them easily accessible to all developers within the organization. They can range from simple UI elements like buttons and input fields to more complex components like search bars, modals, or data tables.
            </p>
            <p>
                For now, these components will not be libraries but will remain as part of the project structure for easier integration and development.
            </p>
        </Wrapper>
    );
};

export default Intro;