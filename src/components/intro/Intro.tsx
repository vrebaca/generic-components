import React from 'react';
import { ContentWrapper, IBox, IBoxContent, PageWrapper } from '../common/Containers';
import { H2SemiBold, TextBodyMdRegular } from '../../packages/typography';

const Intro: React.FC = () => {
    return (
        <PageWrapper>
            <ContentWrapper>
            <IBox>
                <IBoxContent>
                    <H2SemiBold>Overview</H2SemiBold>
                    <TextBodyMdRegular>The Fiskaltrust UI Design System is all about making sure our digital products look and feel consistent, easy to use, and aligned with our brand. It helps our teams work together more efficiently by providing a clear set of rules and reusable elements to create smooth, cohesive user experiences.</TextBodyMdRegular>
                    <H2SemiBold>Why Do We Need a Design System?</H2SemiBold>
                    <TextBodyMdRegular>As we grow and expand, keeping things consistent across our platforms becomes really important. A design system not only helps us build user-friendly interfaces faster, but it also keeps everything looking and working in a way that feels familiar to our users. This system is our go-to guide to keep things on track and make development more efficient.</TextBodyMdRegular>
                    <H2SemiBold>Content</H2SemiBold>
                    <TextBodyMdRegular>Foundations: A solid base with things like our color scheme, fonts, spacing, and icons that define how we look.</TextBodyMdRegular>
                    <br />
                    <TextBodyMdRegular>Components: Reusable UI elements like buttons, inputs, and navigation tools that are easy to plug in anywhere and keep things consistent.
                        Patterns: Tried-and-tested designs for common tasks and interactions to make sure our users always know what to expect.
                    </TextBodyMdRegular>
                    <br />
                    <TextBodyMdRegular>Guidelines: Best practices for accessibility, usability, and responsiveness to ensure we meet the needs of all our users.</TextBodyMdRegular>
                    <H2SemiBold>Who’s This For?</H2SemiBold>
                    <ul>
                        <li>
                            <TextBodyMdRegular>Designers: To create visually appealing and user-friendly interfaces that align with our brand identity.</TextBodyMdRegular>
                        </li>
                        <li>
                            <TextBodyMdRegular>Developers: To implement designs correctly and efficiently using reusable code and standardized UI elements.</TextBodyMdRegular>
                        </li>
                        <li>
                            <TextBodyMdRegular>Product Managers: To align teams on design decisions and ensure user experience goals are met consistently.</TextBodyMdRegular>
                        </li>
                        <li>
                            <TextBodyMdRegular>UX Researchers: To ensure usability principles are followed and that research findings shape the design.</TextBodyMdRegular>
                        </li>
                        <li>
                            <TextBodyMdRegular>Stakeholders: To align business goals with user experience and simplify feedback and iteration.</TextBodyMdRegular>
                        </li>
                    </ul>
                    <H2SemiBold>How to Use It?</H2SemiBold>
                    <TextBodyMdRegular>Start by checking out the basic design foundations to get a sense of the overall look and feel. Then dive into the components to find pre-made elements that you can use to speed up your work. And of course, follow the guidelines to keep things accessible and user-friendly. The more we all use and contribute to the system, the better it gets.</TextBodyMdRegular>
                    <H2SemiBold>The benefits of using custom generic components</H2SemiBold>
                    <ul>
                        <li><strong>Consistency</strong>: Ensures a uniform look and feel across all applications, improving the user experience.</li>
                        <li><strong>Efficiency</strong>: Speeds up development by providing pre-built, tested components that developers can easily integrate.</li>
                        <li><strong>Maintainability</strong>: Centralizes updates and bug fixes, as changes to a component propagate to all instances where it's used.</li>
                        <li><strong>Scalability</strong>: Simplifies scaling applications by reusing components in new features or projects.</li>
                        <li><strong>Collaboration</strong>: Encourages collaboration among teams by providing a shared library of components.</li>
                    </ul>
                    <TextBodyMdRegular>These components are often stored in a dedicated library or repository, making them easily accessible to all developers within the organization. They can range from simple UI elements like buttons and input fields to more complex components like search bars, modals, or data tables.</TextBodyMdRegular>
                </IBoxContent>
            </IBox>
            </ContentWrapper>
        </PageWrapper>
    );
};

export default Intro;