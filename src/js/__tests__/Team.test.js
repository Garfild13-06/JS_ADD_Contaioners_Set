import Team from '../Team';

test('should add a character to the team', () => {
  const team = new Team();
  const character = {name: 'Archer', type: 'Bowman'};
  team.add(character);
  expect(team.members.has(character)).toBe(true);
});

test('should throw an error when adding a duplicate character', () => {
  const team = new Team();
  const character = {name: 'Archer', type: 'Bowman'};
  team.add(character);
  expect(() => team.add(character)).toThrow('Character is already in the team');
});

test('should add multiple characters to the team', () => {
  const team = new Team();
  const character1 = {name: 'Archer', type: 'Bowman'};
  const character2 = {name: 'Mage', type: 'Magician'};
  team.addAll(character1, character2);
  expect(team.members.has(character1)).toBe(true);
  expect(team.members.has(character2)).toBe(true);
});

test('should not add duplicate characters when using addAll', () => {
  const team = new Team();
  const character1 = {name: 'Archer', type: 'Bowman'};
  const character2 = {name: 'Mage', type: 'Magician'};
  team.addAll(character1, character2, character1);
  expect(team.members.size).toBe(2);
});

test('should convert team members to an array', () => {
  const team = new Team();
  const character1 = {name: 'Archer', type: 'Bowman'};
  const character2 = {name: 'Mage', type: 'Magician'};
  team.addAll(character1, character2);
  const membersArray = team.toArray();
  expect(membersArray).toEqual([character1, character2]);
});
