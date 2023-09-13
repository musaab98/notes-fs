exports.handler = async (event) => {
    console.log(event);
    const title = event.pathParameters.id;
    const note = {'title': title, 'content': "test content " + title};
    const response = {
        statusCode: 200,
        body: JSON.stringify(note),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*'
        },
        body: JSON.stringify(note),
    };
    return response;
}