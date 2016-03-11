#!/usr/bin/env python3
"""Iterate through a Zotero library and convert all the ISBNs to the
   standard form with hypens.
"""

from isbnlib import get_canonical_isbn, mask
from pyzotero import zotero
from tqdm import tqdm
from LibraryConfig import *

zot = zotero.Zotero(ZOT_LIBRARY_ID, 'user', ZOT_API_KEY)
print("Getting library data from Zotero")
nitems =  zot.num_items()
itemsgen =  zot.makeiter(zot.top(limit=10))
for batch in tqdm(itemsgen, total=int(nitems/10 + int(bool(nitems % 10)))):
#    print('Item: %s | Key: %s') % (item['data']['itemType'], item['data']['key'])
    for item in batch:
        try:
            isbn = item['data']['ISBN']
        except KeyError:
            # Not a book-ish item
            continue
            
        # Transform to canonical (bare) form, then return to standardised
        # form with hyphens.
        if isbn:
            canisbn = get_canonical_isbn(isbn.replace(' ', ''))
            if canisbn:
                newisbn = mask(canisbn)
#                print((isbn, canisbn, newisbn))
            else:
                print("Error extracting ISBN from "+str(isbn))
                continue
            if newisbn != isbn:
                assert newisbn
                print("Updating "+str(isbn)+" to "+str(newisbn))
                item['data']['ISBN'] = newisbn
                if not zot.update_item(item):
                    raise Exception("Zotero write failed for "+str(isbn))
