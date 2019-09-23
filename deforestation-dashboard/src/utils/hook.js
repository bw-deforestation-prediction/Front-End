import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage.js"

const useDarkMode = () => {

    const [isDark, setIsDark] = useLocalStorage(false)
    console.log(isDark);

    useEffect(() => {

        if (isDark === true) {
            document.body.classList.add('dark-mode');
            if (document.querySelector('.dashboard-header-div')){
                document.querySelector('.dashboard-header-div').classList.add('dark-mode');
                document.querySelector('.totals-summary-div').classList.add('dark-mode');
            }
        }
        else {
            document.body.classList.remove('dark-mode');
            if (document.querySelector('.dashboard-header-div')) {
            document.querySelector('.dashboard-header-div').classList.remove('dark-mode');
            document.querySelector('.totals-summary-div').classList.remove('dark-mode');
            }
        }
    }, [isDark]);

    return [isDark, setIsDark];
}
export default useDarkMode; 