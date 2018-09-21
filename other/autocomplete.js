/*

Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.

For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.

*/

import TrieSearch from 'trie-search';

const entries = ['dog', 'deer', 'deal'];
const modifiedEntries = entries.reduce((acc, curr) => ({ ...acc, [curr]: curr }), {});

const trie = new TrieSearch();
trie.addFromObject(modifiedEntries);

const getFromTrie = trieToGetFrom => key => trieToGetFrom.get(key).map(entry => entry.value);

const get = getFromTrie(trie);

console.log(get('d'));
console.log(get('do'));
console.log(get('de'));
console.log(get('dea'));
