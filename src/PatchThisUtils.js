/**
 * Patch This: A basic patching system
 * Copyright (C) 2020-2022 Guilherme Tadashi Maeoka
 * <https://github.com/guimspace/PatchThis>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

class PatchThisUtils {
  static isLatestVersion (source, reference) {
    if (source.major > reference.major) return true;
    if (source.major === reference.major) {
      if (source.minor > reference.minor) return true;
      if (source.minor === reference.minor) {
        if (source.patch > reference.patch) return true;
        if (source.patch === reference.patch) {
          if (source.beta >= reference.beta) return true;
        }
      }
    }

    return false;
  }
}

module.exports = PatchThisUtils;
