let facts = [
    'The UK\'s flying insect population has declined by as much as 60% in the last 20 years.',
    '11% of greenhouse gas emissions caused by humans are due to deforestation.',
    'Carbon dioxide in the atmosphere is now reaching levels 50% higher than before the industrial revolution.',
    'Atmospheric methane levels averaged 1,895.7 ppb during 2021, or around 162% greater than pre-industrial levels.',
    'Your plastic childhood toys that were thrown away are still sitting in a landfill somewhere.',
    'The emissions, which seem to have accelerated in the past few years, are a major threat to the world\’s goal of limiting global warming to 1.5\–2 °C over pre-industrial temperatures.',
    'Future changes are expected to include a warmer atmosphere, a warmer and more acidic ocean, higher sea levels, and larger changes in precipitation patterns.',
    'Average wildlife populations have dropped by 60 per cent in just over 40 years.',
    'The homes of 200 million people will be below sea level in 70 years.',
    'Plastic production and use is forecast to double over the next 20 years, and quadruple by the early 2050s.',
    'Climate change is accelerating the spread of infectious diseases, such as dengue fever and malaria, creating conditions in more regions where the infections can thrive. In 2018, dengue had expanded by as much as 15% compared to a 1950s baseline.',
    'The estimated average carbon footprint of the world\’s richest 1% could be up to 175 times larger than that of someone in the poorest 10%.',
    'More than a million species face potential extinction as a result of disappearing habitats, changing ecosystems, and acidifying oceans.'
]
let actions = ['The Earth is getting a bruise so turn your electricals OFF when not in use.',
    'Welcome to Sustainability-ology. Number 1: Invest in Eco-friendly technology.',
    'Consider buying local and supporting small businesses.',
    'Don\'t waste food, compost. Your local flora will thank you.',
    'Plastic doesn\'t decompose. Consider buying stainless steel or glass containers.',
    'To support your local insect population, consider dispersing flower seeds in your garden or park.',
    'Overfishing and industrial farming are the main reason for high methane levels in our atmosphere. Consider having a more plant-based diet.',
    'Vote with your money. Buy from organisations whose values align with yours.',
    'Use eco-friendly cleaning products.',
    'To avoid dengue mosquito eggs, throw away, turn over, empty or store under a roof any container that may accumulate rainwater. Always place a tight lid on containers used for water storage (buckets, drums).',
    'Just like a toddler screaming please, so are we so plant some trees.'
]
let factsButton = document.querySelector('#factsButton')
let reset = document.querySelector('#reset')
let solutions = document.querySelector('#solutions')

let factsP = document.querySelector('#factsParag')
let solutionsP = document.querySelector('#solutionsParag')


factsButton.addEventListener('click', function(e) {
    factsP.innerHTML = facts[Math.floor(Math.random() * facts.length)]
})

solutions.addEventListener('click', function(e) {
    solutionsP.innerHTML = actions[Math.floor(Math.random() * actions.length)]
})

reset.addEventListener('click', function(e) {
    factsP.innerHTML = '';
    solutionsP.innerHTML = '';
})