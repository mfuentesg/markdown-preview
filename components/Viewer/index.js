import React from 'react';

import marked from 'marked';

export default ({ content }) => (
  <div dangerouslySetInnerHTML={{ __html: marked(content) }}/>
);