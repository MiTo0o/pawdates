const staticHolidays = {
  '1/2': ['National Pet Travel Safety Day', 'Happy Mew Year for Cats Day'],
  '1/5': 'National Bird Day',
  '1/6': ['National Cuddle Up Day', 'National Standard Poodle Day'],
  '1/7': 'National Alaskan Malamute Day',
  '1/8': 'National Labrador Retriever Day',
  '1/9': 'National Australian Shepherd Day',
  '1/13': 'National French Bulldog Day',
  '1/14': 'National Dress Up Your Pet Day',
  '1/15': 'National American Eskimo Dog Day',
  '1/17': 'National Boxer Day',
  '1/19': 'National Conservation Dog Day',
  '1/20': 'Penguin Awareness Day',
  '1/21': 'Squirrel Appreciation Day',
  '1/22': ['National Yorkshire Terrier Day', 'National Answer Your Cat’s Question Day'],
  '1/24': ['Change a Pet’s Life Day', 'Peanut Butter Day'],
  '1/29': ['Seeing-Eye Guide Dog Anniversary', 'Tuxedo Cat Appreciation Day'],
  '2/1': 'World Greyhound Day',
  '2/2': ['National Brown Dog Day', 'National Hedgehog Day'],
  '2/3': ['Doggie Date Night', 'National Golden Retriever Day'],
  '2/14': 'Pet Theft Awareness Day',
  '2/19': ['National Boston Terrier Day', 'National Whippet Day'],
  '2/20': 'Love Your Pet Day',
  '2/21': 'International Skye Terrier Day',
  '2/22': 'Walking the Dog Day',
  '2/23': 'National Dog Biscuit Day',
  '3/1': ['National Pig Day', 'National Welsh Corgi Day'],
  '3/2': 'International Rescue Cat Day',
  '3/3': ['World Wildlife Day', 'If Pets Had Thumbs Day', 'Tripawd Awareness Day'],
  '3/8': 'International Akita Day',
  '3/13': 'K-9 Veterans Day',
  '3/14': 'UK Dog Theft Awareness Day',
  '3/15': 'National Catio Day',
  '3/20': ['World Sparrow Day', 'National Westie Day'],
  '3/23': ['National Puppy Day', 'Cuddly Kitten Day'],
  '3/25': 'National Newfoundland Dog Day',
  '3/27': 'National Terrier Day',
  '3/28': 'Respect Your Cat Day',
  '3/30': 'Take a Walk in the Park Day',
  '4/1': 'International Bull Terrier Day',
  '4/2': 'National Ferret Day',
  '4/4': ['World Stray Animal Day', 'World Rat Day'],
  '4/6': 'National Siamese Cat Day',
  '4/7': 'National Pet Health Insurance Day',
  '4/8': 'National Dog Fighting Awareness Day',
  '4/10': 'National Hug Your Dog Day',
  '4/11': ['National Pet Day', 'Dog Therapy Appreciation Day'],
  '4/12': 'World Hamster Day',
  '4/18': 'Pet Owners Day',
  '4/19': ['National Cat Lady Day', 'Dog Parent Appreciation Day'],
  '4/21': 'Bulldogs are Beautiful Day',
  '4/22': 'National Beagle Day',
  '4/23': ['National Lost Dog Awareness Day', 'Pet CPR Day'],
  '4/26': 'National Kids and Pets Day',
  '4/27': 'National Little Pampered Dog Day',
  '4/30': ['Adopt a Shelter Pet Day', 'National Therapy Animal Day', 'National Tabby Day'],
  '5/1': ['National Purebred Dog Day', 'International Samoyed Day'],
  '5/3': 'National Specially-Abled Pets Day',
  '5/4': 'Bird Day',
  '5/10': 'German Shepherd Day',
  '5/14': 'International Chihuahua Appreciation Day',
  '5/17': 'Endangered Species Day',
  '5/20': 'National Rescue Dog Day',
  '5/23': 'World Turtle Day',
  '5/25': 'International Cavalier King Charles Spaniel Day',
  '6/1': 'International Sheltie Day',
  '6/2': 'National Greyhound Day',
  '6/4': ['International Corgi Day', 'Hug Your Cat Day'],
  '6/7': 'World Food Safety Day',
  '6/12': 'Peruvian Hairless Dog Day',
  '6/15': 'National Dog Dad Day',
  '6/16': 'Father’s Day',
  '6/17': 'Take Your Cat to Work Day®',
  '6/18': ['National Internet Cat Day', 'Veterinary Appreciation Day'],
  '6/19': ['National Garfield the Cat Day', 'National Pets in Film Day'],
  '6/20': 'Ugliest Dog Day',
  '6/21': ['National Dog Party Day', 'National Dachshund Day', 'Take Your Dog to Work Day®'],
  '6/22': 'National Pet Choking Prevention Day',
  '6/24': 'Cat World Domination Day',
  '6/28': 'National Insurance Awareness Day',
  '7/1': 'ID Your Pet Day',
  '7/4': 'International Whippet Day',
  '7/6': 'World Zoonoses Day',
  '7/10': 'National Kitten Day',
  '7/11': 'All-American Pet Photo Day',
  '7/15': ['National Pet Fire Safety Day', 'Feline Leukemia Day'],
  '7/16': 'World Snake Day',
  '7/21': ['World Collie Day', 'National Craft for your Local Shelters Day'],
  '7/22': 'AAHA-Accredited Hospital Day',
  '7/26': 'National Dog Photography Day',
  '7/28': 'National Parents Day (fourth Sunday in July)',
  '7/30': 'International Friendship Day',
  '7/31': 'National Mutt Day',
  '8/1': ['DOGust Universal Birthday for Shelter Dogs', 'National Yorkie Day'],
  '8/4': 'Assistance Dog Day',
  '8/6': 'Fresh Breath Day',
  '8/8': 'International Cat Day',
  '8/10': 'Spoil Your Dog Day',
  '8/14': 'World Lizard Day',
  '8/15': 'National Check the Chip Day',
  '8/17': [
    'National Black Cat Appreciation Day',
    'International Non-Profit Day',
    'World Honeybee Day'
  ],
  '8/22': 'National Take Your Cat to the Vet Day',
  '8/23': 'Blind Dog Day',
  '8/26': 'National Dog Day',
  '8/28': 'Rainbow Bridge Remembrance Day',
  '8/30': 'National Holistic Pet Day',
  '9/1': 'Ginger Cat Appreciation Day',
  '9/5': 'National White Cat Day',
  '9/8': ['National Dog Walker Appreciation Day', 'National Iguana Awareness Day'],
  '9/10': 'World Suicide Prevention Day',
  '9/13': 'Pet Birth Defect Awareness Day',
  '9/15': 'National Pet Carbon Monoxide Safety Day',
  '9/17': 'National Pet Bird Day',
  '9/19': 'National Meow Like a Pirate Day',
  '9/21': 'National Cat and Dog Gut Health Awareness Day',
  '9/23': ['Dogs in Politics Day', 'Adopted Dog Day'],
  '9/26':
    'Remember Me Thursday® (an international social media awareness day that brings attention to the millions of adoptable pets waiting in shelters and remembers those pets who never got a second chance. Share your rescue pet using #RememberMeThursday)',
  '9/28': ['World Rabies Day', 'International Rabbit Day'],
  '9/30': 'National Puppy Mill Survivor Day',
  '10/1': ['National Fire Pup Day', 'National Black Dog Day'],
  '10/4': 'World Animal Day',
  '10/9': 'National Pet Obesity Awareness Day',
  '10/10': 'World Mental Health Day',
  '10/16': 'National Feral Cat Day',
  '10/19': 'National Fetch Day',
  '10/21': ['National Pets for Veterans Day', 'Reptile Awareness Day'],
  '10/27': 'National Black Cat Day',
  '10/28': 'Plush Animal Lovers Day',
  '10/29': 'National Cat Day',
  '11/1': 'National Cook for Your Pets Day',
  '11/7': 'National Canine Lymphoma Awareness Day',
  '11/8': 'International Human-Animal Bond Day',
  '11/12': 'World Animal Enrichment Day',
  '11/15': 'National Philanthropy Day',
  '11/16': 'National Slobber Appreciation Day',
  '11/17': 'National Black Cat Day',
  '11/18': 'National Feline Infectious Peritonitis (FIP) Awareness, Research and Education Day',
  '11/23': ['Wolfenoot', 'Thankful for My Dog Day'],
  '11/24': 'National Border Collie Day',
  '11/28': 'National Dog Show',
  '12/2': 'National Mutt Day',
  '12/3': 'Giving Tuesday',
  '12/4': 'World Wildlife Conservation Day',
  '12/9': 'International Day of Veterinary Medicine',
  '12/10': 'International Animal Rights Day',
  '12/13': 'National Day of the Horse',
  '12/27': 'Visit the Zoo Day'
}

export default staticHolidays
