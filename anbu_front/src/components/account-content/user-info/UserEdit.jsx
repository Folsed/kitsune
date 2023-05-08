import styles from './user-info.module.css'
import { userAuthContext } from '../../../providers/AuthProvider';
import { format } from 'date-fns';
import { uk } from 'date-fns/locale';
import Input from './../../../UI/inputs/AdminFormInput'
import Textarea from './../../../UI/inputs/AdminFormTextarea'
import { BlackButton } from '../../../UI/buttons/BlackButton';
import { OrangeButton } from '../../../UI/buttons/OrangeButton';
import { useEffect, useState } from 'react';
import { usePronouns } from '../../../hooks/user/usePronouns';
import SelectInput from '../../../UI/inputs/SelectInput';
import useInfoUpdate from '../../../hooks/user/useInfoUpdate';


const UserEdit = ({ setEditIsActive }) => {
    const { currentUser } = userAuthContext()
    const { data: pronouns, isLoading } = usePronouns()

    const formattedDate = format(new Date(currentUser.created_at), 'd MMMM yyyy', { locale: uk });
    const capitalizedMonth = formattedDate.replace(/(^|\s)(\p{Ll})/gu, change => change.toUpperCase());

    const [name, setName] = useState(currentUser.name)
    const [bio, setBio] = useState(currentUser.bio ? currentUser.bio : '')
    
    const [selectData, setSelectData] = useState() // pronouns data
    const [pronoun, setPronoun] = useState(currentUser.pronoun && {value: currentUser.pronoun, label: currentUser.pronoun})

    const { userInfo, errors, setErrors } = useInfoUpdate({ setEditIsActive })

    useEffect(() => {
        if (!isLoading) {
            setSelectData([
                { id: null, name: '-'},
                ...pronouns.map((item) => ({
                  id: item.name,
                  name: item.name,
                }))
              ])
        }
    }, [pronouns])

    const onSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('_method', 'PUT');
        formData.append('new_name', name)
        formData.append('new_pronoun', pronoun.value ? pronoun.value : '')
        formData.append('new_bio', bio ? bio : '')

        userInfo.mutateAsync(formData)
    }
    
    return (
        <form onSubmit={onSubmit} noValidate>
            <div className={styles.avatarWrapper}>
                <div className={styles.avatar}>
                    {/* <img src={''} alt="" /> */}
                </div>
            </div>
            <div className={styles.editWrapper}>
                <Input
                    placeholder={'Name'}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <SelectInput
                    options={isLoading ? [] : selectData ? selectData : []}
                    isLoading={isLoading}
                    value={pronoun}
                    placeholder={pronoun ? pronoun : 'Pronoun'}
                    setValue={setPronoun}
                    closeMenuOnSelect
                />
                <Textarea
                    placeholder={'Bio'}
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                />
                <div className={styles.editActionBtns}>
                    <OrangeButton title={'Зберегти'} />
                    <BlackButton title={'Назад'} onClick={() => setEditIsActive(false)} />
                </div>
            </div>
        </form>
    )
}

export default UserEdit