import { useEffect, useState} from 'react';

export function useMenuInteractions(menuRef) {
  const [ open, setOpen ] = useState(false);

  function toggle() {
    setOpen(open => !open);
  }

  function focusHandler(e) {
    if (!menuRef.current.contains(e.target)) {
      setOpen(false);
    }
  }

  function keyHandler(e) {
    if (e.key === 'Escape') {
      setOpen(false);
    }
  }

  function register() {
    document.addEventListener('focusin', focusHandler);
    document.addEventListener('keydown', keyHandler);
  }

  function unregister() {
    document.removeEventListener('focusin', focusHandler);
    document.removeEventListener('keydown', keyHandler);
  }

  useEffect(() => {
    register();
    return unregister;
  }, [menuRef.current]);

  return [ open, toggle ];
}
