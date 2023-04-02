import { UrlRepositoryMock } from '../../../../../../test/server/mocks/repositories/UrlRepository'
import { SearchResultsSortOrder } from '../../../../../shared/search'
import { DirectoryQueryConditions } from '../..'

import { DirectorySearchService } from '..'

/**
 * Unit tests for DirectorySearchService.
 */
describe('DirectorySearchService tests', () => {
  describe('plainTextSearch tests', () => {
    it('Should return results from repository', async () => {
      const repository = new UrlRepositoryMock()
      const service = new DirectorySearchService(repository)
      const conditions: DirectoryQueryConditions = {
        query: 'test-moh',
        order: SearchResultsSortOrder.Popularity,
        limit: 10,
        offset: 0,
        state: 'ACTIVE',
        isFile: false,
        isEmail: false,
      }
      const spy = jest.spyOn(repository, 'rawDirectorySearch')
      await expect(service.plainTextSearch(conditions)).resolves.toStrictEqual({
        urls: [
          {
            longUrl: 'https://test-moh.com',
            shortUrl: 'test-moh',
            state: 'ACTIVE',
            isFile: false,
            email: 'test@test.gov.sg',
          },
        ],
        count: 0,
      })
      expect(repository.rawDirectorySearch).toBeCalledWith(conditions)
      spy.mockClear()
    })
  })
})
