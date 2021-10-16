import React from 'react';
import auther from '../me.jpg';

const AboutMe = () => {
    return (
        <div className='container py-5'>
            <div class='row'>
                <div className='col-lg-6 col-sm-12'>
                    <div className='photo-wrap'>
                        <img className='profile-img' src={auther} alt='author...' />
                    </div>
                </div>
                <div className='col-lg-6 col-sm-12'>
                    <h1 className='about-heading'> about me </h1>
                    <p>
                    Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;