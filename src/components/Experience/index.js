import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Container, Wrapper, Title, CarouselWrapper, ViewToggleButtonGroup,
    ToggleButtonGroup, ToggleButtonGroupMobile, ToggleButton, Divider, CardContainer,
    ListItem, PostHeader, PostTitle, PostDate,
    PostDescription, Tags, Tag, LeftArrowSVG, RightArrowSVG,
    LeftArrowPath, RightArrowPath
} from './ExperienceStyle'; // Make sure to create a separate ExperienceStyle.js for styling
import { experience } from '../../data/constants'; // Import experience data from Data.js
import { FaList, FaSlidersH } from 'react-icons/fa'; 

const Experience = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [isMobileView, setIsMobileView] = useState(false);
    const [viewType, setViewType] = useState('list'); // Default view type
    const navigate = useNavigate();

    const handleResize = () => {
        const width = window.innerWidth;
        const isMobile = width <= 768;

        setIsMobileView(isMobile);

        if (isMobile) {
            setViewType('grid');
        } else {
            setViewType('list');
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleNext = () => {
        if (experience.length > startIndex + (isMobileView ? 1 : 3)) {
            setStartIndex(startIndex + (isMobileView ? 1 : 3));
        } else {
            setStartIndex(0);
        }
    };

    const handlePrev = () => {
        setStartIndex(Math.max(startIndex - (isMobileView ? 1 : 3), 0));
    };

    const handleViewTypeChange = (type) => {
        setViewType(type);
    };

    return (
        <Container id="experience">
            <Wrapper>
                <Title>Experience</Title>
                {!isMobileView && (
                    <ViewToggleButtonGroup>
                        <ToggleButton
                            onClick={() => handleViewTypeChange('list')}
                            isActive={viewType === 'list'}
                        >
                            <FaList />
                        </ToggleButton>
                        <ToggleButton
                            onClick={() => handleViewTypeChange('grid')}
                            isActive={viewType === 'grid'}
                        >
                            <FaSlidersH />
                        </ToggleButton>
                    </ViewToggleButtonGroup>
                )}

                {viewType === 'grid' ? (
                    <CarouselWrapper>
                        <CardContainer>
                            {experience.slice(startIndex, startIndex + (isMobileView ? 1 : 3)).map((item, index) => (
                                <ListItem key={index}>
                                    <img src={item.image} alt={item.role} />
                                    <div>
                                        <PostHeader>
                                            <PostTitle>{item.role}</PostTitle>
                                            <PostDate>{item.date}</PostDate>
                                        </PostHeader>
                                        <PostDescription>{item.description}</PostDescription>
                                        <Tags>
                                            {item.tags?.map((tag, index) => (
                                                <Tag key={index}>{tag}</Tag>
                                            ))}
                                        </Tags>
                                    </div>
                                </ListItem>
                            ))}
                        </CardContainer>
                        <ToggleButtonGroup>
                            <ToggleButton onClick={handlePrev} disabled={startIndex === 0}>
                                <LeftArrowSVG>
                                    <LeftArrowPath />
                                </LeftArrowSVG>
                            </ToggleButton>
                            <ToggleButton onClick={handleNext} disabled={startIndex + (isMobileView ? 1 : 3) >= experience.length}>
                                <RightArrowSVG>
                                    <RightArrowPath />
                                </RightArrowSVG>
                            </ToggleButton>
                        </ToggleButtonGroup>
                        <ToggleButtonGroupMobile>
                            <ToggleButton onClick={handlePrev} disabled={startIndex === 0}>
                                <LeftArrowSVG>
                                    <LeftArrowPath />
                                </LeftArrowSVG>
                            </ToggleButton>
                            <ToggleButton onClick={handleNext} disabled={startIndex + (isMobileView ? 1 : 3) >= experience.length}>
                                <RightArrowSVG>
                                    <RightArrowPath />
                                </RightArrowSVG>
                            </ToggleButton>
                        </ToggleButtonGroupMobile>
                    </CarouselWrapper>
                ) : (
                    <CardContainer>
                        {experience.map((item, index) => (
                            <ListItem key={index}>
                                <img src={item.image} alt={item.role} />
                                <div>
                                    <PostHeader>
                                        <PostTitle>{item.role}</PostTitle>
                                        <PostDate>{item.date}</PostDate>
                                    </PostHeader>
                                    <PostDescription>{item.description}</PostDescription>
                                    <Tags>
                                        {item.tags?.map((tag, index) => (
                                            <Tag key={index}>{tag}</Tag>
                                        ))}
                                    </Tags>
                                </div>
                            </ListItem>
                        ))}
                    </CardContainer>
                )}
                <Divider />
            </Wrapper>
        </Container>
    );
};

export default Experience;
