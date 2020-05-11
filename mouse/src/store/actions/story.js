let storyIndex = 0;

export const addStory = story => {
    return {
        type: 'ADD_STORY',
        index: storyIndex++,
    }
}