import { Container } from '../../../components/container';
import { PageTransition } from '../../../components/page-transition';
import { SectionTitle } from '../../../components/section-title';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Privacy() {
  const { t } = useTranslation();

  const [isDownloading, setIsDownloading] = useState(false);

  const downloadPDF = () => {
    setIsDownloading(true);
    const link = document.createElement('a');
    link.href = '/pdf/privacy.pdf';
    link.download = 'Arquivo PDF';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsDownloading(false);
  };

  return (
    <PageTransition>
      <main>
        <section className="pt-12 pb-20 dark:bg-dark-social-background dark:text-dark-social-white">
          <div
            className="lg:max-w-[1024px] lg:mx-auto
                       md:max-w-[620px] md:mx-auto
                       max-w-[320px] mx-auto"
          >
            <SectionTitle
              content={t('privacy.sectionTitle')}
              className="lg:mb-14 lg:text-left
                         md:mb-14 md:text-left
                         mb-10 text-left"
            />
            <Container
              className="lg:pt-8 lg:pb-6 lg:px-4
                         md:pt-8 md:pb-6 md:px-4
                         pt-8 pb-6 px-4"
            >
              <div
                className="lg:pb-6
                           md:pb-6
                           pb-6"
              >
                <div
                  className="lg:flex lg:gap-x-52
                             md:flex md:gap-x-52"
                >
                  <h2
                    className="lg:text-2xl lg:font-semibold lg:text-left text-social-brand
                               md:text-xl md:font-semibold md:text-left
                               text-lg font-semibold text-center"
                  >
                    {t('privacy.firstH2')}
                  </h2>
                  <div>
                    <h2
                      className="lg:text-lg lg:font-semibold lg:inline-block text-social-brand
                                 md:hidden
                                 hidden"
                    >
                      {t('privacy.secondH2')}
                    </h2>
                    <p
                      className="lg:text-justify lg:text-sm lg:pt-1 lg:inline-block text-social-gray
                                 md:hidden
                                 hidden"
                    >
                      {t('privacy.firstP')}
                    </p>
                  </div>
                </div>
                <p className="pt-5">
                  {t('privacy.secondP')}
                </p>
              </div>
              <div className="pb-6">
                <h2 className="text-lg font-semibold text-social-brand">
                  {t('privacy.thirdH2')}
                </h2>
                <p className="pt-5">
                  {t('privacy.thirdP')}
                </p>
              </div>
              <div className="pb-6">
                <h2 className="text-lg font-semibold text-social-brand">
                  {t('privacy.fourH2')}
                </h2>
                <p className="pt-5">
                  {t('privacy.fourP')}
                  <ul className="pl-2">
                    <li className="flex items-center">
                      <span
                        className="lg:inline-block lg:w-2 lg:h-2 lg:rounded-full bg-social-brand lg:mr-2
                                   md:hidden
                                   hidden"
                      ></span>
                      {t('privacy.firstSpan')}
                    </li>
                    <li className="flex items-center">
                      <span
                        className="lg:inline-block lg:w-2 lg:h-2 lg:rounded-full bg-social-brand lg:mr-2
                                   md:hidden
                                   hidden"
                      ></span>
                      {t('privacy.secondSpan')}
                    </li>
                    <li className="flex items-center">
                      <span
                        className="lg:inline-block lg:w-2 lg:h-2 lg:rounded-full bg-social-brand lg:mr-2
                                   md:hidden
                                   hidden"
                      ></span>
                      {t('privacy.thirdSpan')}
                    </li>
                    <li className="flex items-center">
                      <span
                        className="lg:inline-block lg:w-2 lg:h-2 lg:rounded-full bg-social-brand lg:mr-2
                                   md:hidden
                                   hidden"
                      ></span>
                      {t('privacy.fourSpan')}
                    </li>
                    <li className="flex items-center">
                      <span
                        className="lg:inline-block lg:w-2 lg:h-2 lg:rounded-full bg-social-brand lg:mr-2
                                   md:hidden
                                   hidden"
                      ></span>
                      {t('privacy.fifithSpan')}
                    </li>
                    <li className="flex items-center">
                      <span
                        className="lg:inline-block lg:w-2 lg:h-2 lg:rounded-full bg-social-brand lg:mr-2
                                   md:hidden
                                   hidden"
                      ></span>
                      {t('privacy.sixthSpan')}
                    </li>
                  </ul>
                </p>
              </div>
              <div className="pb-6">
                <h2 className="text-lg font-semibold text-social-brand">
                  {t('privacy.fifithH2')}
                </h2>
                <p className="pt-5">
                  {t('privacy.fifithP')}
                </p>
              </div>
              <div className="pb-6">
                <h2 className="text-lg font-semibold text-social-brand">
                  {t('privacy.sixthH2')}
                </h2>
                <p className="pt-5">
                  {t('privacy.sixthP')}
                </p>
              </div>
              <div className="pb-6">
                <h2 className="text-lg font-semibold text-social-brand">
                  {t('privacy.seventhH2')}
                </h2>
                <p className="pt-5">
                  {t('privacy.seventhP')}
                </p>
              </div>
              <div className="pb-6">
                <h2 className="text-lg font-semibold text-social-brand">
                  {t('privacy.eighthH2')}
                </h2>
                <p className="pt-5">
                  {t('privacy.eighthP')}
                  <ul className="pl-2">
                    <li className="flex items-center">
                      <span
                        className="lg:inline-block lg:w-2 lg:h-2 lg:rounded-full bg-social-brand lg:mr-2
                                   md:hidden
                                   hidden"
                      ></span>
                      {t('privacy.seventhSpan')}
                    </li>
                    <li className="flex items-center">
                      <span
                        className="lg:inline-block lg:w-2 lg:h-2 lg:rounded-full bg-social-brand lg:mr-2
                                   md:hidden
                                   hidden"
                      ></span>
                      {t('privacy.eighthSpan')}
                    </li>
                    <li className="flex items-center">
                      <span
                        className="lg:inline-block lg:w-2 lg:h-2 lg:rounded-full bg-social-brand lg:mr-2
                                   md:hidden
                                   hidden"
                      ></span>
                      {t('privacy.ninethSpan')}
                    </li>
                  </ul>
                </p>
              </div>
              <div className="pb-6">
                <h2 className="text-lg font-semibold text-social-brand">
                  {t('privacy.ninethH2')}
                </h2>
                <p className="pt-5">
                  {t('privacy.ninethP')}
                </p>
              </div>
              <div className="pb-6">
                <h2
                  className="text-lg font-semibold text-social-brand border-t-2 border-social-gray
                         pt-6">
                  {t('privacy.tenthH2')}
                </h2>
                <div className="pt-7">
                  <a
                    onClick={downloadPDF}
                    disabled={isDownloading}
                    className="border border-social-gray rounded lg:px-28 md:px-20 px-16 py-1 font-semibold
                              transition duration-500 hover:text-social-white 
                              hover:bg-social-brand hover:border-social-white cursor-pointer
                              disabled:opacity-50 disabled:cursor-not-allowed">
                    {t('privacy.firstA')}
                  </a>
                </div>
              </div>
            </Container>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}

export { Privacy };