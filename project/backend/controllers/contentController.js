// Get protected content
exports.getContent = (req, res) => {
  res.json({
    message: 'Protected content',
    data: {
      title: 'Welcome to the Dashboard',
      description: 'This is protected content only visible to authenticated users.',
      sections: [
        {
          id: 1,
          title: 'Section 1',
          content: 'This is the content for section 1'
        },
        {
          id: 2,
          title: 'Section 2',
          content: 'This is the content for section 2'
        },
        {
          id: 3,
          title: 'Section 3',
          content: 'This is the content for section 3'
        }
      ]
    }
  });
};