import React from 'react';
import { Provider } from 'react-redux';

import MockStore from '../../mocks/store.mock';
import renderWithRouter from '../../mocks/router.mock';
import mockShow from '../../mocks/show.mock';
import Show from './Show';

describe('<Show />', () => {
    let store;

    beforeEach(() => {
        store = new MockStore({ show: { data: mockShow, loaded: true } });
    });

    it('should render Show', () => {
        const { container } = renderWithRouter(
            <Provider store={store}>
                <Show />
            </Provider>,
            { route: `shows/6771` },
        );

        expect(container).toMatchInlineSnapshot(`
            <div>
              <div
                class="show"
              >
                <div
                  class="container"
                >
                  <div
                    class="entity"
                  >
                    <h2
                      class="entity__title"
                    >
                      The Powerpuff Girls
                    </h2>
                    <section
                      class="entity__details"
                    >
                      <img
                        alt="The Powerpuff Girls"
                        class="entity__image"
                        src="http://static.tvmaze.com/uploads/images/medium_portrait/60/151357.jpg"
                      />
                      <p
                        class="entity__summary"
                      >
                        <p>
                          The city of Townsville may be a beautiful, bustling metropolis, but don't be fooled! There's evil afoot! And only three things can keep the bad guys at bay: Blossom, Bubbles and Buttercup, three super-powered little girls, known to their fans (and villains everywhere) as 
                          <b>
                            The Powerpuff Girls
                          </b>
                          . Juggling school, bedtimes, and beating up giant monsters may be daunting, but together the Powerpuff Girls are up to the task. Battling a who's who of evil, they show what it really means to 'fight like a girl.'
                        </p>
                      </p>
                    </section>
                  </div>
                  <div
                    class="episodes"
                  >
                    <h3
                      class="episodes__title"
                    >
                      Episodes
                    </h3>
                    <div
                      class="episodesList"
                    >
                      <div
                        class="episodesList__episode"
                      >
                        <a
                          href="shows/shows/6771/episodes/657308"
                        >
                          <img
                            alt="Escape from Monster Island"
                            src="http://static.tvmaze.com/uploads/images/medium_landscape/53/132617.jpg"
                          />
                          <p>
                            Escape from Monster Island
                          </p>
                          <p>
                            1
                            x
                            1
                          </p>
                        </a>
                      </div>
                      <div
                        class="episodesList__episode"
                      >
                        <a
                          href="shows/shows/6771/episodes/691594"
                        >
                          <img
                            alt="Bye Bye, Bellum"
                            src="http://static.tvmaze.com/uploads/images/medium_landscape/53/132631.jpg"
                          />
                          <p>
                            Bye Bye, Bellum
                          </p>
                          <p>
                            1
                            x
                            7
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        `);
    });
});
