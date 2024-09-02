const express = require('express');
const router = express.Router();
const prismaClient = require("../prisma/client.js")

router.post('/', async (req, res) => {

    const find = await prismaClient.monster.findFirst({
        where: {
            id: "aboleth"
        }
    })

    if (find) {

        return res.json("Já criado.")

    }

    await clientRedis.del("monsters")

    const monsters1 = [
        { id: 'aboleth', name: 'Aboleth', type: 'creature', size: 'large', languages: 'Deep Speech', alignment: 'lawful evil' },
        { id: 'acolyte', name: 'Acolyte', type: 'humanoid', size: 'medium', languages: 'Common', alignment: 'any alignment' },
        { id: 'adult-black-dragon', name: 'Adult Black Dragon', type: 'dragon', size: 'huge', languages: 'Common, Draconic', alignment: 'chaotic evil' },
        { id: 'adult-blue-dragon', name: 'Adult Blue Dragon', type: 'dragon', size: 'huge', languages: 'Common, Draconic', alignment: 'lawful evil' },
        { id: 'adult-brass-dragon', name: 'Adult Brass Dragon', type: 'dragon', size: 'huge', languages: 'Common, Draconic', alignment: 'chaotic good' },
        { id: 'adult-bronze-dragon', name: 'Adult Bronze Dragon', type: 'dragon', size: 'huge', languages: 'Common, Draconic', alignment: 'lawful good' },
        { id: 'adult-copper-dragon', name: 'Adult Copper Dragon', type: 'dragon', size: 'huge', languages: 'Common, Draconic', alignment: 'chaotic good' },
        { id: 'adult-gold-dragon', name: 'Adult Gold Dragon', type: 'dragon', size: 'huge', languages: 'Common, Draconic', alignment: 'lawful good' },
        { id: 'adult-green-dragon', name: 'Adult Green Dragon', type: 'dragon', size: 'huge', languages: 'Common, Draconic', alignment: 'lawful evil' },
        { id: 'adult-red-dragon', name: 'Adult Red Dragon', type: 'dragon', size: 'huge', languages: 'Common, Draconic', alignment: 'chaotic evil' },
        { id: 'adult-silver-dragon', name: 'Adult Silver Dragon', type: 'dragon', size: 'huge', languages: 'Common, Draconic', alignment: 'lawful good' },
        { id: 'adult-white-dragon', name: 'Adult White Dragon', type: 'dragon', size: 'huge', languages: 'Common, Draconic', alignment: 'chaotic evil' },
        { id: 'air-elemental', name: 'Air Elemental', type: 'elemental', size: 'large', languages: 'Auran', alignment: 'neutral' },
        { id: 'ancient-black-dragon', name: 'Ancient Black Dragon', type: 'dragon', size: 'gargantuan', languages: 'Common, Draconic', alignment: 'chaotic evil' },
        { id: 'ancient-blue-dragon', name: 'Ancient Blue Dragon', type: 'dragon', size: 'gargantuan', languages: 'Common, Draconic', alignment: 'lawful evil' },
        { id: 'ancient-brass-dragon', name: 'Ancient Brass Dragon', type: 'dragon', size: 'gargantuan', languages: 'Common, Draconic', alignment: 'chaotic good' },
        { id: 'ancient-bronze-dragon', name: 'Ancient Bronze Dragon', type: 'dragon', size: 'gargantuan', languages: 'Common, Draconic', alignment: 'lawful good' },
        { id: 'ancient-copper-dragon', name: 'Ancient Copper Dragon', type: 'dragon', size: 'gargantuan', languages: 'Common, Draconic', alignment: 'chaotic good' },
        { id: 'ancient-gold-dragon', name: 'Ancient Gold Dragon', type: 'dragon', size: 'gargantuan', languages: 'Common, Draconic', alignment: 'lawful good' },
        { id: 'ancient-green-dragon', name: 'Ancient Green Dragon', type: 'dragon', size: 'gargantuan', languages: 'Common, Draconic', alignment: 'lawful evil' },
        { id: 'ancient-red-dragon', name: 'Ancient Red Dragon', type: 'dragon', size: 'gargantuan', languages: 'Common, Draconic', alignment: 'chaotic evil' },
        { id: 'ancient-silver-dragon', name: 'Ancient Silver Dragon', type: 'dragon', size: 'gargantuan', languages: 'Common, Draconic', alignment: 'lawful good' },
        { id: 'ancient-white-dragon', name: 'Ancient White Dragon', type: 'dragon', size: 'gargantuan', languages: 'Common, Draconic', alignment: 'chaotic evil' },
        { id: 'androsphinx', name: 'Androsphinx', type: 'monstrosity', size: 'large', languages: 'Common, Sphinx', alignment: 'lawful neutral' },
        { id: 'animated-armor', name: 'Animated Armor', type: 'construct', size: 'medium', languages: '--', alignment: 'unaligned' },
        { id: 'ankheg', name: 'Ankheg', type: 'monstrosity', size: 'large', languages: '--', alignment: 'unaligned' },
        { id: 'ape', name: 'Ape', type: 'beast', size: 'medium', languages: '--', alignment: 'unaligned' },
        { id: 'archmage', name: 'Archmage', type: 'humanoid', size: 'medium', languages: 'Common, Draconic, Dwarvish, Elvish', alignment: 'any alignment' },
        { id: 'assassin', name: 'Assassin', type: 'humanoid', size: 'medium', languages: 'Thieves\' Cant plus any two languages', alignment: 'any alignment' },
        { id: 'awakened-shrub', name: 'Awakened Shrub', type: 'plant', size: 'small', languages: '--', alignment: 'unaligned' },
        { id: 'awakened-tree', name: 'Awakened Tree', type: 'plant', size: 'huge', languages: '--', alignment: 'unaligned' },
        { id: 'axe-beak', name: 'Axe Beak', type: 'beast', size: 'large', languages: '--', alignment: 'unaligned' },
        { id: 'azer', name: 'Azer', type: 'elemental', size: 'medium', languages: 'Ignan', alignment: 'lawful neutral' },
        { id: 'baboon', name: 'Baboon', type: 'beast', size: 'small', languages: '--', alignment: 'unaligned' },
        { id: 'badger', name: 'Badger', type: 'beast', size: 'tiny', languages: '--', alignment: 'unaligned' },
        { id: 'balor', name: 'Balor', type: 'fiend', size: 'huge', languages: 'Abyssal, telepathy 120 ft.', alignment: 'chaotic evil' },
        { id: 'bandit', name: 'Bandit', type: 'humanoid', size: 'medium', languages: 'any one language (usually Common)', alignment: 'any non-lawful alignment' },
        { id: 'bandit-captain', name: 'Bandit Captain', type: 'humanoid', size: 'medium', languages: 'any two languages', alignment: 'any non-lawful alignment' },
        { id: 'barbed-devil', name: 'Barbed Devil', type: 'fiend', size: 'medium', languages: 'Infernal, telepathy 120 ft.', alignment: 'lawful evil' },
        { id: 'basilisk', name: 'Basilisk', type: 'monstrosity', size: 'medium', languages: '--', alignment: 'unaligned' },
        { id: 'bat', name: 'Bat', type: 'beast', size: 'tiny', languages: '--', alignment: 'unaligned' },
        { id: 'bearded-devil', name: 'Bearded Devil', type: 'fiend', size: 'medium', languages: 'Infernal, telepathy 120 ft.', alignment: 'lawful evil' },
        { id: 'behir', name: 'Behir', type: 'monstrosity', size: 'huge', languages: 'Draconic', alignment: 'neutral evil' },
        { id: 'berserker', name: 'Berserker', type: 'humanoid', size: 'medium', languages: 'any one language (usually Common)', alignment: 'any chaotic alignment' },
        { id: 'black-bear', name: 'Black Bear', type: 'beast', size: 'medium', languages: '--', alignment: 'unaligned' },
        { id: 'black-dragon-wyrmling', name: 'Black Dragon Wyrmling', type: 'dragon', size: 'medium', languages: 'Draconic', alignment: 'chaotic evil' },
        { id: 'black-pudding', name: 'Black Pudding', type: 'ooze', size: 'large', languages: '--', alignment: 'unaligned' },
        { id: 'blink-dog', name: 'Blink Dog', type: 'fey', size: 'medium', languages: 'Sylvan', alignment: 'lawful good' },
        { id: 'blood-hawk', name: 'Blood Hawk', type: 'beast', size: 'small', languages: '--', alignment: 'unaligned' },
        { id: 'blue-dragon-wyrmling', name: 'Blue Dragon Wyrmling', type: 'dragon', size: 'medium', languages: 'Draconic', alignment: 'lawful evil' },
        { id: 'boar', name: 'Boar', type: 'beast', size: 'medium', languages: '--', alignment: 'unaligned' },
        { id: 'bone-devil', name: 'Bone Devil', type: 'fiend', size: 'medium', languages: 'Infernal, telepathy 120 ft.', alignment: 'lawful evil' },
        { id: 'brass-dragon-wyrmling', name: 'Brass Dragon Wyrmling', type: 'dragon', size: 'small', languages: 'Draconic', alignment: 'chaotic good' },
        { id: 'bronze-dragon-wyrmling', name: 'Bronze Dragon Wyrmling', type: 'dragon', size: 'small', languages: 'Draconic', alignment: 'lawful good' },
        { id: 'brown-bear', name: 'Brown Bear', type: 'beast', size: 'large', languages: '--', alignment: 'unaligned' },
        { id: 'bugbear', name: 'Bugbear', type: 'humanoid', size: 'medium', languages: 'Common, Goblin', alignment: 'chaotic evil' },
        { id: 'bulette', name: 'Bulette', type: 'monstrosity', size: 'large', languages: '--', alignment: 'unaligned' },
        { id: 'camel', name: 'Camel', type: 'beast', size: 'large', languages: '--', alignment: 'unaligned' },
        { id: 'cat', name: 'Cat', type: 'beast', size: 'tiny', languages: '--', alignment: 'unaligned' },
        { id: 'centaur', name: 'Centaur', type: 'monstrosity', size: 'large', languages: 'Common, Elvish', alignment: 'neutral good' },
        { id: 'chain-devil', name: 'Chain Devil', type: 'fiend', size: 'medium', languages: 'Infernal, telepathy 120 ft.', alignment: 'lawful evil' },
        { id: 'chimera', name: 'Chimera', type: 'monstrosity', size: 'large', languages: '--', alignment: 'chaotic evil' },
        { id: 'chuul', name: 'Chuul', type: 'monstrosity', size: 'large', languages: '--', alignment: 'chaotic evil' },
        { id: 'clay-golem', name: 'Clay Golem', type: 'construct', size: 'large', languages: '--', alignment: 'unaligned' },
        { id: 'cloaker', name: 'Cloaker', type: 'monstrosity', size: 'medium', languages: '--', alignment: 'chaotic evil' },
        { id: 'cloud-giant', name: 'Cloud Giant', type: 'giant', size: 'huge', languages: 'Common, Giant', alignment: 'neutral' },
        { id: 'cockatrice', name: 'Cockatrice', type: 'monstrosity', size: 'small', languages: '--', alignment: 'unaligned' },
        { id: 'commoner', name: 'Commoner', type: 'humanoid', size: 'medium', languages: 'Common', alignment: 'any alignment' },
        { id: 'constrictor-snake', name: 'Constrictor Snake', type: 'beast', size: 'large', languages: '--', alignment: 'unaligned' },
        { id: 'copper-dragon-wyrmling', name: 'Copper Dragon Wyrmling', type: 'dragon', size: 'small', languages: 'Draconic', alignment: 'chaotic good' },
        { id: 'couatl', name: 'Couatl', type: 'celestial', size: 'medium', languages: 'Celestial, Draconic', alignment: 'lawful good' },
        { id: 'crab', name: 'Crab', type: 'beast', size: 'tiny', languages: '--', alignment: 'unaligned' },
        { id: 'crocodile', name: 'Crocodile', type: 'beast', size: 'large', languages: '--', alignment: 'unaligned' },
        { id: 'cult-fanatic', name: 'Cult Fanatic', type: 'humanoid', size: 'medium', languages: 'Common', alignment: 'any evil alignment' },
        { id: 'cultist', name: 'Cultist', type: 'humanoid', size: 'medium', languages: 'any one language (usually Common)', alignment: 'any evil alignment' },
        { id: 'darkmantle', name: 'Darkmantle', type: 'monstrosity', size: 'small', languages: '--', alignment: 'unaligned' },
        { id: 'death-dog', name: 'Death Dog', type: 'monstrosity', size: 'medium', languages: '--', alignment: 'unaligned' },
        { id: 'deep-gnome-svirfneblin', name: 'Deep Gnome (Svirfneblin)', type: 'humanoid', size: 'small', languages: 'Common, Gnomish', alignment: 'lawful neutral' },
        { id: 'deer', name: 'Deer', type: 'beast', size: 'medium', languages: '--', alignment: 'unaligned' },
        { id: 'deva', name: 'Deva', type: 'celestial', size: 'medium', languages: 'Celestial, Common', alignment: 'lawful good' },
        { id: 'dire-wolf', name: 'Dire Wolf', type: 'beast', size: 'large', languages: '--', alignment: 'unaligned' },
        { id: 'djinni', name: 'Djinni', type: 'genie', size: 'large', languages: 'Auran, telepathy 120 ft.', alignment: 'chaotic neutral' },
        { id: 'doppelganger', name: 'Doppelganger', type: 'monstrosity', size: 'medium', languages: 'Common, telepathy 60 ft.', alignment: 'chaotic evil' },
        { id: 'draft-horse', name: 'Draft Horse', type: 'beast', size: 'large', languages: '--', alignment: 'unaligned' },
        { id: 'dragon-turtle', name: 'Dragon Turtle', type: 'dragon', size: 'gargantuan', languages: 'Common, Draconic', alignment: 'chaotic neutral' },
        { id: 'dretch', name: 'Dretch', type: 'fiend', size: 'small', languages: 'Abyssal', alignment: 'chaotic evil' },
        { id: 'drider', name: 'Drider', type: 'monstrosity', size: 'medium', languages: 'Elvish', alignment: 'chaotic evil' },
        { id: 'drow', name: 'Drow', type: 'humanoid', size: 'medium', languages: 'Elvish', alignment: 'chaotic evil' },
        { id: 'druid', name: 'Druid', type: 'humanoid', size: 'medium', languages: 'Common, Druidic', alignment: 'neutral' },
        { id: 'dryad', name: 'Dryad', type: 'fey', size: 'medium', languages: 'Common, Sylvan', alignment: 'chaotic good' },
        { id: 'duergar', name: 'Duergar', type: 'humanoid', size: 'medium', languages: 'Common, Dwarvish', alignment: 'lawful evil' },
        { id: 'dust-mephit', name: 'Dust Mephit', type: 'mephit', size: 'small', languages: 'Auran', alignment: 'chaotic neutral' },
        { id: 'eagle', name: 'Eagle', type: 'beast', size: 'small', languages: '--', alignment: 'unaligned' },
        { id: 'earth-elemental', name: 'Earth Elemental', type: 'elemental', size: 'large', languages: 'Terran', alignment: 'neutral' },
        { id: 'efreeti', name: 'Efreeti', type: 'genie', size: 'large', languages: 'Ignan, telepathy 120 ft.', alignment: 'chaotic evil' },
        { id: 'elephant', name: 'Elephant', type: 'beast', size: 'huge', languages: '--', alignment: 'unaligned' },
        { id: 'elk', name: 'Elk', type: 'beast', size: 'large', languages: '--', alignment: 'unaligned' },
        { id: 'erinyes', name: 'Erinyes', type: 'fiend', size: 'medium', languages: 'Infernal, telepathy 120 ft.', alignment: 'lawful evil' },
        { id: 'ettercap', name: 'Ettercap', type: 'monstrosity', size: 'medium', languages: '--', alignment: 'chaotic evil' },
        { id: 'ettin', name: 'Ettin', type: 'giant', size: 'large', languages: 'Giant', alignment: 'chaotic evil' }
    ]

    const monsters2 = [
        { id: 'fire-elemental', name: 'Fire Elemental', type: 'elemental', size: 'large', languages: 'Ignan', alignment: 'neutral' },
        { id: 'fire-giant', name: 'Fire Giant', type: 'giant', size: 'huge', languages: 'Giant', alignment: 'chaotic evil' },
        { id: 'flesh-golem', name: 'Flesh Golem', type: 'construct', size: 'large', languages: '--', alignment: 'unaligned' },
        { id: 'flying-snake', name: 'Flying Snake', type: 'beast', size: 'small', languages: '--', alignment: 'unaligned' },
        { id: 'flying-sword', name: 'Flying Sword', type: 'construct', size: 'small', languages: '--', alignment: 'neutral' },
        { id: 'frog', name: 'Frog', type: 'beast', size: 'small', languages: '--', alignment: 'unaligned' },
        { id: 'frost-giant', name: 'Frost Giant', type: 'giant', size: 'huge', languages: 'Giant', alignment: 'chaotic evil' },
        { id: 'gargoyle', name: 'Gargoyle', type: 'monstrosity', size: 'medium', languages: '--', alignment: 'chaotic evil' },
        { id: 'gelatinous-cube', name: 'Gelatinous Cube', type: 'ooze', size: 'large', languages: '--', alignment: 'unaligned' },
        { id: 'ghast', name: 'Ghast', type: 'undead', size: 'medium', languages: 'Common', alignment: 'chaotic evil' },
        { id: 'ghost', name: 'Ghost', type: 'undead', size: 'medium', languages: 'Common', alignment: 'chaotic neutral' },
        { id: 'ghoul', name: 'Ghoul', type: 'undead', size: 'medium', languages: '--', alignment: 'chaotic evil' },
        { id: 'giant-ape', name: 'Giant Ape', type: 'beast', size: 'huge', languages: '--', alignment: 'unaligned' },
        { id: 'giant-badger', name: 'Giant Badger', type: 'beast', size: 'medium', languages: '--', alignment: 'unaligned' },
        { id: 'giant-bat', name: 'Giant Bat', type: 'beast', size: 'large', languages: '--', alignment: 'unaligned' },
        { id: 'giant-boar', name: 'Giant Boar', type: 'beast', size: 'large', languages: '--', alignment: 'unaligned' },
        { id: 'giant-centipede', name: 'Giant Centipede', type: 'beast', size: 'small', languages: '--', alignment: 'unaligned' },
        { id: 'giant-constrictor-snake', name: 'Giant Constrictor Snake', type: 'beast', size: 'large', languages: '--', alignment: 'unaligned' },
        { id: 'giant-crab', name: 'Giant Crab', type: 'beast', size: 'large', languages: '--', alignment: 'unaligned' },
        { id: 'giant-crocodile', name: 'Giant Crocodile', type: 'beast', size: 'large', languages: '--', alignment: 'unaligned' },
        { id: 'giant-eagle', name: 'Giant Eagle', type: 'beast', size: 'large', languages: '--', alignment: 'neutral good' },
        { id: 'giant-elk', name: 'Giant Elk', type: 'beast', size: 'huge', languages: '--', alignment: 'neutral' },
        { id: 'giant-fire-beetle', name: 'Giant Fire Beetle', type: 'beast', size: 'small', languages: '--', alignment: 'unaligned' },
        { id: 'giant-frog', name: 'Giant Frog', type: 'beast', size: 'large', languages: '--', alignment: 'unaligned' },
        { id: 'giant-goat', name: 'Giant Goat', type: 'beast', size: 'large', languages: '--', alignment: 'unaligned' },
        { id: 'giant-hyena', name: 'Giant Hyena', type: 'beast', size: 'large', languages: '--', alignment: 'chaotic evil' },
        { id: 'giant-lizard', name: 'Giant Lizard', type: 'beast', size: 'large', languages: '--', alignment: 'unaligned' },
        { id: 'giant-octopus', name: 'Giant Octopus', type: 'beast', size: 'large', languages: '--', alignment: 'neutral' },
        { id: 'giant-owl', name: 'Giant Owl', type: 'beast', size: 'large', languages: '--', alignment: 'neutral good' },
        { id: 'giant-poisonous-snake', name: 'Giant Poisonous Snake', type: 'beast', size: 'large', languages: '--', alignment: 'unaligned' },
        { id: 'giant-rat', name: 'Giant Rat', type: 'beast', size: 'medium', languages: '--', alignment: 'unaligned' },
        { id: 'giant-rat-diseased', name: 'Giant Rat (Diseased)', type: 'beast', size: 'medium', languages: '--', alignment: 'unaligned' },
        { id: 'giant-scorpion', name: 'Giant Scorpion', type: 'beast', size: 'large', languages: '--', alignment: 'unaligned' },
        { id: 'giant-sea-horse', name: 'Giant Sea Horse', type: 'beast', size: 'large', languages: '--', alignment: 'neutral' },
        { id: 'giant-shark', name: 'Giant Shark', type: 'beast', size: 'huge', languages: '--', alignment: 'unaligned' },
        { id: 'giant-spider', name: 'Giant Spider', type: 'beast', size: 'large', languages: '--', alignment: 'unaligned' },
        { id: 'giant-toad', name: 'Giant Toad', type: 'beast', size: 'large', languages: '--', alignment: 'unaligned' },
        { id: 'giant-vulture', name: 'Giant Vulture', type: 'beast', size: 'large', languages: '--', alignment: 'unaligned' },
        { id: 'giant-wasp', name: 'Giant Wasp', type: 'beast', size: 'small', languages: '--', alignment: 'unaligned' },
        { id: 'giant-weasel', name: 'Giant Weasel', type: 'beast', size: 'small', languages: '--', alignment: 'unaligned' },
        { id: 'giant-wolf-spider', name: 'Giant Wolf Spider', type: 'beast', size: 'medium', languages: '--', alignment: 'unaligned' },
        { id: 'gibbering-mouther', name: 'Gibbering Mouther', type: 'aberration', size: 'large', languages: '--', alignment: 'chaotic evil' },
        { id: 'glabrezu', name: 'Glabrezu', type: 'fiend', size: 'huge', languages: 'Infernal', alignment: 'chaotic evil' },
        { id: 'gladiator', name: 'Gladiator', type: 'humanoid', size: 'medium', languages: 'Common', alignment: 'neutral' },
        { id: 'gnoll', name: 'Gnoll', type: 'humanoid', size: 'medium', languages: 'Gnoll', alignment: 'chaotic evil' },
        { id: 'goat', name: 'Goat', type: 'beast', size: 'small', languages: '--', alignment: 'unaligned' },
        { id: 'goblin', name: 'Goblin', type: 'humanoid', size: 'small', languages: 'Goblin', alignment: 'chaotic evil' },
        { id: 'gold-dragon-wyrmling', name: 'Gold Dragon Wyrmling', type: 'dragon', size: 'tiny', languages: 'Draconic', alignment: 'lawful good' },
        { id: 'gorgon', name: 'Gorgon', type: 'monstrosity', size: 'large', languages: '--', alignment: 'chaotic evil' },
        { id: 'gray-ooze', name: 'Gray Ooze', type: 'ooze', size: 'medium', languages: '--', alignment: 'unaligned' },
        { id: 'green-dragon-wyrmling', name: 'Green Dragon Wyrmling', type: 'dragon', size: 'tiny', languages: 'Draconic', alignment: 'chaotic evil' },
        { id: 'green-hag', name: 'Green Hag', type: 'fey', size: 'medium', languages: 'Common, Sylvan', alignment: 'chaotic evil' },
        { id: 'grick', name: 'Grick', type: 'monstrosity', size: 'medium', languages: '--', alignment: 'neutral' },
        { id: 'griffon', name: 'Griffon', type: 'beast', size: 'large', languages: '--', alignment: 'neutral' },
        { id: 'grimlock', name: 'Grimlock', type: 'humanoid', size: 'medium', languages: 'Undercommon', alignment: 'chaotic evil' },
        { id: 'guard', name: 'Guard', type: 'humanoid', size: 'medium', languages: 'Common', alignment: 'lawful neutral' },
        { id: 'guardian-naga', name: 'Guardian Naga', type: 'monstrosity', size: 'large', languages: 'Draconic', alignment: 'lawful good' },
        { id: 'gynosphinx', name: 'Gynosphinx', type: 'sphinx', size: 'large', languages: 'Common, Sphinx', alignment: 'neutral' },
        { id: 'half-red-dragon-veteran', name: 'Half-Red Dragon Veteran', type: 'humanoid', size: 'medium', languages: 'Common, Draconic', alignment: 'chaotic neutral' },
        { id: 'harpy', name: 'Harpy', type: 'monstrosity', size: 'medium', languages: 'Common', alignment: 'chaotic evil' },
        { id: 'hawk', name: 'Hawk', type: 'beast', size: 'tiny', languages: '--', alignment: 'unaligned' },
        { id: 'hell-hound', name: 'Hell Hound', type: 'fiend', size: 'medium', languages: 'Infernal', alignment: 'lawful evil' },
        { id: 'hezrou', name: 'Hezrou', type: 'fiend', size: 'large', languages: 'Infernal', alignment: 'chaotic evil' },
        { id: 'hill-giant', name: 'Hill Giant', type: 'giant', size: 'huge', languages: 'Giant', alignment: 'chaotic evil' },
        { id: 'hippogriff', name: 'Hippogriff', type: 'beast', size: 'large', languages: '--', alignment: 'neutral' },
        { id: 'hobgoblin', name: 'Hobgoblin', type: 'humanoid', size: 'medium', languages: 'Goblin', alignment: 'lawful evil' },
        { id: 'homunculus', name: 'Homunculus', type: 'construct', size: 'tiny', languages: '--', alignment: 'neutral' },
        { id: 'horned-devil', name: 'Horned Devil', type: 'fiend', size: 'large', languages: 'Infernal', alignment: 'lawful evil' },
        { id: 'hunter-shark', name: 'Hunter Shark', type: 'beast', size: 'large', languages: '--', alignment: 'unaligned' },
        { id: 'hydra', name: 'Hydra', type: 'monstrosity', size: 'huge', languages: '--', alignment: 'chaotic evil' },
        { id: 'hyena', name: 'Hyena', type: 'beast', size: 'medium', languages: '--', alignment: 'neutral' },
        { id: 'ice-devil', name: 'Ice Devil', type: 'fiend', size: 'large', languages: 'Infernal', alignment: 'lawful evil' },
        { id: 'ice-mephit', name: 'Ice Mephit', type: 'fiend', size: 'small', languages: 'Infernal', alignment: 'chaotic evil' },
        { id: 'imp', name: 'Imp', type: 'fiend', size: 'tiny', languages: 'Infernal', alignment: 'lawful evil' },
        { id: 'invisible-stalker', name: 'Invisible Stalker', type: 'elemental', size: 'medium', languages: '--', alignment: 'neutral' },
        { id: 'iron-golem', name: 'Iron Golem', type: 'construct', size: 'huge', languages: '--', alignment: 'lawful neutral' },
        { id: 'jackal', name: 'Jackal', type: 'beast', size: 'small', languages: '--', alignment: 'unaligned' },
        { id: 'killer-whale', name: 'Killer Whale', type: 'beast', size: 'large', languages: '--', alignment: 'unaligned' },
        { id: 'knight', name: 'Knight', type: 'humanoid', size: 'medium', languages: 'Common', alignment: 'lawful neutral' },
        { id: 'kobold', name: 'Kobold', type: 'humanoid', size: 'small', languages: 'Draconic', alignment: 'chaotic evil' },
        { id: 'kraken', name: 'Kraken', type: 'celestial', size: 'gargantuan', languages: 'Aquan', alignment: 'chaotic evil' },
        { id: 'lamia', name: 'Lamia', type: 'fiend', size: 'large', languages: 'Common', alignment: 'chaotic evil' },
        { id: 'lemure', name: 'Lemure', type: 'fiend', size: 'medium', languages: 'Infernal', alignment: 'lawful evil' },
        { id: 'lich', name: 'Lich', type: 'undead', size: 'medium', languages: 'Common, Infernal', alignment: 'lawful evil' },
        { id: 'lion', name: 'Lion', type: 'beast', size: 'large', languages: '--', alignment: 'unaligned' },
        { id: 'lizard', name: 'Lizard', type: 'beast', size: 'small', languages: '--', alignment: 'unaligned' },
        { id: 'lizardfolk', name: 'Lizardfolk', type: 'humanoid', size: 'medium', languages: 'Draconic', alignment: 'neutral' },
        { id: 'mage', name: 'Mage', type: 'humanoid', size: 'medium', languages: 'Common', alignment: 'neutral' },
        { id: 'magma-mephit', name: 'Magma Mephit', type: 'fiend', size: 'small', languages: 'Infernal', alignment: 'chaotic evil' },
        { id: 'magmin', name: 'Magmin', type: 'fiend', size: 'small', languages: 'Infernal', alignment: 'chaotic evil' },
        { id: 'mammoth', name: 'Mammoth', type: 'beast', size: 'gargantuan', languages: '--', alignment: 'unaligned' },
        { id: 'manticore', name: 'Manticore', type: 'monstrosity', size: 'large', languages: '--', alignment: 'chaotic evil' },
        { id: 'marilith', name: 'Marilith', type: 'fiend', size: 'huge', languages: 'Infernal', alignment: 'chaotic evil' },
        { id: 'mastiff', name: 'Mastiff', type: 'beast', size: 'medium', languages: '--', alignment: 'unaligned' },
        { id: 'medusa', name: 'Medusa', type: 'monstrosity', size: 'medium', languages: 'Common', alignment: 'chaotic evil' },
        { id: 'merfolk', name: 'Merfolk', type: 'humanoid', size: 'medium', languages: 'Aquan', alignment: 'neutral' },
        { id: 'merrow', name: 'Merrow', type: 'giant', size: 'large', languages: 'Aquan', alignment: 'chaotic evil' },
        { id: 'mimic', name: 'Mimic', type: 'monstrosity', size: 'medium', languages: '--', alignment: 'neutral' },
        { id: 'minotaur', name: 'Minotaur', type: 'monstrosity', size: 'large', languages: '--', alignment: 'chaotic evil' },
        { id: 'minotaur-skeleton', name: 'Minotaur Skeleton', type: 'undead', size: 'large', languages: '--', alignment: 'chaotic evil' }
    ];
    
    /*function generateUniqueId(name, existingIds) {
        let baseId = name.toLowerCase().replace(/ /g, '-');
        let uniqueId = baseId;
        let randomSuffix = () => Math.floor(100 + Math.random() * 900); // Gera um número aleatório de 3 dígitos
    
        while (existingIds.has(uniqueId)) {
            uniqueId = `${baseId}-${randomSuffix()}`;
        }
    
        existingIds.add(uniqueId);
        return uniqueId;
    }
    
    const existingIds = new Set();
    const formattedMonsters = monsters.map(monster => {
        const id = generateUniqueId(monster.name, existingIds);
    
        return {
            id,
            name: monster.name,
            type: monster.type,
            size: monster.size,
            languages: monster.languages,
            alignment: monster.alignment
        };
    }); */

    try {
        await prismaClient.monster.createMany({
            data: monsters1
        });

        await prismaClient.monster.createMany({
            data: monsters2
        });

        res.status(201).json({ message: 'Monstros adicionados com sucesso!'});

    } catch (err) {
        
        console.error('Erro ao adicionar monstros:', err);
        res.status(500).json({ message: 'Erro ao adicionar monstros.' });
    }
});

module.exports = router