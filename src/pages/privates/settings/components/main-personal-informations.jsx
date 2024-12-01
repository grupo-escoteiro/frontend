import { Input } from '../../../../components/input';
import { Button } from '../../../../components/button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function MainPersonalInformations() {

  const { t } = useTranslation ();

  return (
    <>
      <form
        className="lg:flex lg:flex-wrap lg:gap-x-6 lg:gap-y-14
                   md:flex md:flex-wrap md:justify-between md:gap-x-6 md:gap-y-14
                   flex flex-col"
      >
        <fieldset
          className="lg:hidden
                     md:hidden
                     flex flex-col px-6 py-14 gap-y-14"
        >
          <Input 
            label={t('settings.firstLabel')}
            placeholder={t('settings.firstPlace')}
            errorMessage={t('settings.firstError')}
          />
          <Input 
            label={t('settings.secondLabel')}
            placeholder={t('settings.secondPlace')}
            errorMessage={t('settings.secondError')}
          />
          <Input 
            label={t('settings.thirdLabel')}
            placeholder={t('settings.thirdPlace')}
            errorMessage={t('settings.thirdError')}
          />
          <Input 
            label={t('settings.forthtLabel')}
            placeholder={t('settings.forthPlace')}
            errorMessage={t('settings.forthError')}
          />
        
          <Input 
            label={t('settings.fifithLabel')}
            placeholder={t('settings.fifithPlace')}
            errorMessage={t('settings.fifithError')}
          />
        </fieldset>
        <fieldset
          className="lg:flex lg:justify-between lg:w-full
                     md:hidden
                     hidden"
        >
          <Input 
            label={t('settings.sixthLabel')}
            placeholder={t('settings.sixthPlace')}
            errorMessage={t('settings.sixthError')}
          />
          <Input 
            label={t('settings.seventhLabel')}
            placeholder={t('settings.seventhPlace')}
            errorMessage={t('settings.seventhError')}
          />
        </fieldset>
        <fieldset
          className="lg:hidden
                     md:flex md:justify-between md:w-full
                     hidden"
        >
          <Input 
            label={t('settings.eigthLabel')}
            placeholder={t('settings.eigthPlace')}
            errorMessage={t('settings.eigthError')}
          />
          <Input 
            label={t('settings.ninethLabel')}
            placeholder={t('settings.ninethPlace')}
            errorMessage={t('settings.ninethError')}
          />
        </fieldset>
        <fieldset
          className="lg:flex lg:flex-row lg:gap-x-6
                     md:hidden
                     hidden"
        >
          <Input 
            label={t('settings.tenthLabel')}
            placeholder={t('settings.tenthPlace')}
            errorMessage={t('settings.tenthError')}
          />
          <Input 
            label={t('settings.eleventhLabel')}
            placeholder={t('settings.eleventhPlace')}
            errorMessage={t('settings.eleventhError')}
          />
        
          <Input 
            label={t('settings.twelvethLabel')}
            placeholder={t('settings.twelvethPlace')}
            errorMessage={t('settings.twelvethError')}
          />
        </fieldset>
        <fieldset
          className="lg:hidden
                     md:flex md:flex-wrap md:justify-between md:gap-y-14
                     hidden"
        >
          <Input 
            label={t('settings.thirdthLabel')}
            placeholder={t('settings.thirdthPlace')}
            errorMessage={t('settings.thirdthError')}
          />
          <Input 
            label={t('settings.fourteenthLabel')}
            placeholder={t('settings.fourteenthPlace')}
            errorMessage={t('settings.fourteenthError')}
          />
        
          <Input 
            label={t('settings.fifteenthLabel')}
            placeholder={t('settings.fifteenthPlace')}
            errorMessage={t('settings.fifteenthError')}
          />
        </fieldset>
      </form>
      <div
        className="lg:flex lg:justify-end lg:items-center lg:gap-x-5 lg:pb-0
                   md:flex md:justify-end md:items-center md:gap-x-5 md:py-16
                   hidden"
      >
        <Link className="text-social-red transition duration-500 hover:brightness-50">
          {t('settings.firstLink')}
        </Link>
        <Button
          type="submit" 
          variant="green"
          content="Atualizar"
        />
      </div>
      <div
        className="lg:hidden
                   md:hidden
                   flex flex-col-reverse items-center justify-center pb-16 gap-y-4"
      >
        <Link className="text-social-red transition duration-500 hover:brightness-50">
          {t('settings.secondLink')}
        </Link>
        <Button
          type="submit" 
          variant="green"
          content="Atualizar"
        />
      </div>
    </>
  );
}

export { MainPersonalInformations };