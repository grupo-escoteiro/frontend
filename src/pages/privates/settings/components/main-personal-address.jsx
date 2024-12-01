import { Input } from '../../../../components/input';
import { Button } from '../../../../components/button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function MainPersonalAddress() {

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
            label={t('settings.firstAddressLabel')}
            placeholder={t('settings.firstAddressLabel')}
            errorMessage={t('settings.firstAddressLabel')}
          />
          <Input
            label={t('settings.secondAddressLabel')}
            placeholder={t('settings.secondAddressPlace')}
            errorMessage={t('settings.secondAddressError')}
          />
          <Input
            label={t('settings.thirdthAddressLabel')}
            placeholder={t('settings.thirdthAddressPlace')}
            errorMessage={t('settings.thirdthAddressError')}
          />
          <Input
            label={t('settings.fourthAddressLabel')}
            placeholder={t('settings.fourthAddressPlace')}
            errorMessage={t('settings.fourthAddressError')}
          />
          <Input
            label={t('settings.fifithAddressLabel')}
            placeholder={t('settings.fifithAddressPlace')}
            errorMessage={t('settings.fifithAddressError')}
          />
          <Input
            label={t('settings.sixthAddressLabel')}
            placeholder={t('settings.sixthAddressPlace')}
            errorMessage={t('settings.sixthAddressError')}
          />
          <Input
            label={t('settings.seventhAddressLabel')}
            placeholder={t('settings.seventhAddressPlace')}
            errorMessage={t('settings.seventhAddressError')}
          />
        </fieldset>
        <fieldset
          className="lg:flex lg:gap-x-6
                     md:hidden
                     hidden"
        >
          <Input
            label={t('settings.eighthAddressLabel')}
            placeholder={t('settings.eighthAddressPlace')}
            errorMessage={t('settings.eighthAddressError')}
          />
          <Input
            label={t('settings.ninethAddressLabel')}
            placeholder={t('settings.ninethAddressPlace')}
            errorMessage={t('settings.ninethAddressError')}
          />
          <Input
            label={t('settings.tenthAddressLabel')}
            placeholder={t('settings.tenthAddressPlace')}
            errorMessage={t('settings.tenthAddressError')}
          />
          <Input
            label={t('settings.eleventhAddressLabel')}
            placeholder={t('settings.eleventhAddressPlace')}
            errorMessage={t('settings.eleventhAddressError')}
          />
        </fieldset>
        <fieldset
          className="lg:hidden
                     md:flex md:justify-between md:w-full
                     hidden"
        >
          <Input
            label={t('settings.twelvethAddressLabel')}
            placeholder={t('settings.twelvethAddressPlace')}
            errorMessage={t('settings.twelvethAddressError')}
          />
          <Input
            label={t('settings.thirdteenthAddressLabel')}
            placeholder={t('settings.thirdteenthAddressPlace')}
            errorMessage={t('settings.thirdteenthAddressError')}
          />
        </fieldset>
        <fieldset
          className="lg:hidden
                     md:flex md:justify-between md:w-full
                     hidden"
        >
          <Input
            label={t('settings.fourteenthAddressLabel')}
            placeholder={t('settings.fourteenthAddressPlace')}
            errorMessage={t('settings.fourteenthAddressError')}
          />
          <Input
            label={t('settings.fifiteenthAddressLabel')}
            placeholder={t('settings.fifiteenthAddressPlace')}
            errorMessage={t('settings.fifiteenthAddressError')}
          />
        </fieldset>
        <fieldset
          className="lg:flex lg:gap-x-6
                     md:hidden
                     hidden"
        >
          <Input
            label={t('settings.sixteenthAddressLabel')}
            placeholder={t('settings.sixteenthAddressPlace')}
            errorMessage={t('settings.sixteenthAddressError')}
          />
          <Input
            label={t('settings.seventeenthAddressLabel')}
            placeholder={t('settings.seventeenthAddressPlace')}
            errorMessage={t('settings.seventeenthAddressError')}
          />
          <Input
            label={t('settings.eighteenthAddressLabel')}
            placeholder={t('settings.eighteenthAddressPlace')}
            errorMessage={t('settings.eighteenthAddressError')}
          />
        </fieldset>
        <fieldset
          className="lg:hidden
                     md:flex md:justify-between md:w-full
                     hidden"
        >
          <Input
            label={t('settings.nineteenthAddressLabel')}
            placeholder={t('settings.nineteenthAddressPlace')}
            errorMessage={t('settings.nineteenthAddressError')}
          />
          <Input
            label={t('settings.twentythAddressLabel')}
            placeholder={t('settings.twentythAddressPlace')}
            errorMessage={t('settings.twentythAddressError')}
          />
        </fieldset>
        <fieldset
          className="lg:hidden
                     md:inline-block
                     hidden"
        >
          <Input
            label={t('settings.twentyFirstAddressLabel')}
            placeholder={t('settings.twentyFirstAddressPlace')}
            errorMessage={t('settings.twentyFirstAddressError')}
          />
        </fieldset>
      </form>
      <div
        className="lg:flex lg:justify-end lg:items-center lg:gap-x-5 lg:pb-0
                   md:flex md:justify-end md:items-center md:gap-x-5 md:py-16
                   hidden"
      >
        <Link className="text-social-red transition duration-500 hover:brightness-50">
          {t('settings.thirdLink')}
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
          {t('settings.fourLink')}
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

export { MainPersonalAddress };