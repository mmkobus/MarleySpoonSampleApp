import { createClient } from 'contentful';

export default (app, config) => {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_API_KEY
  });

  app.get('/api/list-entries', (req, res) => {
    client.getEntries({
      content_type: 'tag',
    })
      .then((response) => res.status(200).send(response.items))
      .catch((response) => res.status(response.response.status).send(response.response.statusText));
  });

  app.get('/api/recipes', (req, res) => {
    client.getEntries({
      content_type: 'recipe',
    })
      .then((response) => res.status(200).send(response.items))
      .catch((response) => res.status(response.response.status).send(response.response.statusText));
  });

  app.get('/api/chefs', (req, res) => {
    client.getEntries({
      content_type: 'chef',
    })
      .then((response) => res.status(200).send(response.items))
      .catch((response) => res.status(response.response.status).send(response.response.statusText));
  });
};
