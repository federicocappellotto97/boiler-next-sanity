import atoms from './components/atoms'
import molecules from './components/molecules'
import organisms from './components/organisms'
import menu from './docs/menu'
import pages from './docs/pages'
import settings from './docs/settings'

const docTypes = [pages, settings, menu]
export const schemaTypes = [...atoms, ...molecules, ...organisms, ...docTypes]
