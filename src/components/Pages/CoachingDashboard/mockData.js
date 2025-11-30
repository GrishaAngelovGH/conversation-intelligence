export const mockCalls = [
  {
    id: 1,
    agent: 'John Doe',
    date: '2025-11-19',
    topic_summary: 'Damaged Package',
    transcript: [
      { speaker: 'Agent', text: 'Hello John, thank you for calling. How can I assist you today?' },
      { speaker: 'Customer', text: 'Hi, I\'m having trouble with my recent order. The package arrived damaged.' },
      { speaker: 'Agent', text: 'I\'m very sorry to hear that. Could you please provide your order number so I can look into this for you?' },
      { speaker: 'Customer', text: 'It\'s 12345.' },
      { speaker: 'Agent', text: 'Thank you. I see your order. We can send a replacement right away. Would that work for you?' },
      { speaker: 'Customer', text: 'Yes, that would be great. Thank you for your help.' },
    ],
    comments: [
      { id: 1, author: 'Manager', text: 'Good opening, and excellent empathy shown to the customer.' },
      { id: 2, author: 'Manager', text: 'You resolved the issue quickly and effectively. Great job.' },
      { id: 8, author: 'Manager', text: 'Remember to offer an apology upfront for the inconvenience.' },
      { id: 9, author: 'Manager', text: 'Consider asking if the customer would like expedited shipping for the replacement.' },
    ]
  },
  {
    id: 2,
    agent: 'Jane Smith',
    date: '2025-11-19',
    topic_summary: 'Subscription Cancellation',
    transcript: [
      { speaker: 'Agent', text: 'Thanks for calling, this is Jane. How can I help?' },
      { speaker: 'Customer', text: 'I want to cancel my subscription. I\'m not using it enough.' },
      { speaker: 'Agent', text: 'I understand. Before we proceed, would you be interested in a 50% discount for the next 3 months?' },
      { speaker: 'Customer', text: 'Oh, really? That\'s a good deal. Okay, I\'ll keep it for now.' },
      { speaker: 'Agent', text: 'Great! I\'ve applied the discount to your account.' },
    ],
    comments: [
      { id: 3, author: 'Manager', text: 'Excellent retention tactic! Offering a discount was the right move here.' },
      { id: 10, author: 'Manager', text: 'Always try to save the subscription before confirming cancellation.' },
      { id: 11, author: 'Manager', text: 'Ensure to highlight the value proposition of the subscription even with the discount.' },
    ]
  },
  {
    id: 3,
    agent: 'Peter Jones',
    date: '2025-11-18',
    topic_summary: 'Product Information',
    transcript: [
      { speaker: 'Agent', text: 'Hello, you\'re speaking with Peter. How may I assist you?' },
      { speaker: 'Customer', text: 'I have a question about one of your products.' },
      { speaker: 'Agent', text: 'I\'d be happy to help. Which product are you interested in?' },
      { speaker: 'Customer', text: 'The new "SuperWidget". Can you tell me more about its features?' },
      { speaker: 'Agent', text: 'Of course. The SuperWidget has a new brushless motor and a longer battery life.' },
    ],
    comments: [
      { id: 12, author: 'Manager', text: 'Good product knowledge. Be prepared to elaborate on other features as well.' },
      { id: 13, author: 'Manager', text: 'Try to ask open-ended questions to understand customer needs better.' },
    ]
  },
  {
    id: 4,
    agent: 'John Doe',
    date: '2025-11-18',
    topic_summary: 'Internet Outage',
    transcript: [
      { speaker: 'Agent', text: 'Good morning, this is John. How can I help you today?' },
      { speaker: 'Customer', text: 'My internet is not working.' },
      { speaker: 'Agent', text: 'I can help with that. Have you tried restarting your router?' },
      { speaker: 'Customer', text: 'Yes, I have. It\'s still not working.' },
      { speaker: 'Agent', text: 'Okay, let me run a diagnostic from my end.' },
    ],
    comments: [
      { id: 4, author: 'Manager', text: 'Make sure to follow the full troubleshooting script for internet issues.' },
      { id: 14, author: 'Manager', text: 'Always confirm the exact model of the router before suggesting troubleshooting steps.' },
    ]
  },
  {
    id: 5,
    agent: 'Jane Smith',
    date: '2025-11-17',
    topic_summary: 'Wrong Item Received',
    transcript: [
      { speaker: 'Agent', text: 'Hi, this is Jane speaking. How may I help you?' },
      { speaker: 'Customer', text: 'I received the wrong item in my order.' },
      { speaker: 'Agent', text: 'I apologize for that mistake. Can you give me the order number?' },
      { speaker: 'Customer', text: 'It\'s 54321.' },
      { speaker: 'Agent', text: 'Thank you. I see what happened. We\'ll send you the correct item right away.' },
    ],
    comments: [
      { id: 15, author: 'Manager', text: 'Excellent service recovery. Proactive resolution is key.' },
    ]
  },
  {
    id: 6,
    agent: 'John Doe',
    date: '2025-11-17',
    topic_summary: 'Flight Reservation Change',
    transcript: [
      { speaker: 'Agent', text: 'Good afternoon, this is John. How can I assist you with your flight today?' },
      { speaker: 'Customer', text: 'Hi John, I need to change my flight reservation. My plans have shifted.' },
      { speaker: 'Agent', text: 'I understand. Could you please provide your booking reference number and your last name?' },
      { speaker: 'Customer', text: 'Sure, it\'s XA7B9P and my last name is Smith.' },
      { speaker: 'Agent', text: 'Thank you, Mr. Smith. I see your booking. What date and destination would you like to change it to?' },
    ],
    comments: [
      { id: 16, author: 'Manager', text: 'Excellent job confirming identity and then immediately asking for new details to facilitate the change.' },
      { id: 19, author: 'Manager', text: 'Always confirm the customer\'s understanding of any potential change fees.' },
    ]
  },
  {
    id: 7,
    agent: 'Jane Smith',
    date: '2025-11-17',
    topic_summary: 'Return Policy',
    transcript: [
      { speaker: 'Agent', text: 'This is Jane, how can I help?' },
      { speaker: 'Customer', text: 'Can you tell me about your return policy?' },
      { speaker: 'Agent', text: 'Certainly. You can return any item within 30 days for a full refund.' },
      { speaker: 'Customer', text: 'Does that include sale items?' },
      { speaker: 'Agent', text: 'Yes, it does.' },
    ],
    comments: [
      { id: 17, author: 'Manager', text: 'Clear and concise explanation of the return policy.' },
      { id: 18, author: 'Manager', text: 'Ensure to highlight any exceptions to the policy if applicable.' },
    ]
  },
]
